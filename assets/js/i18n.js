(function () {
  "use strict";

  var data = document.getElementById("site-translations");
  var switcher = document.querySelector(".language-switcher");
  if (!data || !switcher) return;

  var translations = JSON.parse(data.textContent);
  var locales = { en: "en", zh: "zh-Hans", ja: "ja" };
  var storageKey = "academic-homepage-language";
  var englishTitle = document.title;
  var textEntries = Array.from(document.querySelectorAll("[data-i18n]")).map(function (element) {
    var html = element.hasAttribute("data-i18n-html");
    return {
      element: element,
      key: element.dataset.i18n,
      html: html,
      english: html ? element.innerHTML : element.textContent
    };
  });
  var labelEntries = Array.from(document.querySelectorAll("[data-i18n-aria-label]")).map(function (element) {
    return { element: element, key: element.dataset.i18nAriaLabel, english: element.getAttribute("aria-label") };
  });
  var dateEntries = Array.from(document.querySelectorAll("[data-i18n-date]")).map(function (element) {
    return { element: element, english: element.textContent };
  });

  function getLanguage() {
    var requested = new URL(window.location.href).searchParams.get("lang");
    if (Object.prototype.hasOwnProperty.call(locales, requested)) return requested;
    try {
      var saved = window.localStorage.getItem(storageKey);
      if (Object.prototype.hasOwnProperty.call(locales, saved)) return saved;
    } catch (error) {
      // URL-based language selection also works when storage is unavailable.
    }
    return "en";
  }

  function updateLinks(language) {
    document.querySelectorAll("a[href]").forEach(function (link) {
      var url;
      try { url = new URL(link.getAttribute("href"), window.location.href); } catch (error) { return; }
      if (url.protocol !== "http:" && url.protocol !== "https:") return;
      if (url.origin !== window.location.origin) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      } else if (!/\.[a-z0-9]+$/i.test(url.pathname) || /\.html$/i.test(url.pathname)) {
        url.searchParams.set("lang", language);
        link.setAttribute("href", url.pathname + url.search + url.hash);
      }
    });
  }

  function resizeNavigation() {
    var visible = document.querySelector("#site-nav .visible-links");
    var hidden = document.querySelector("#site-nav .hidden-links");
    var toggle = document.querySelector("#site-nav button");
    if (visible && hidden && typeof window.updateNav === "function" && Array.isArray(window.breaks)) {
      // The existing menu caches English widths. Re-measure translated labels.
      while (hidden.firstChild) visible.appendChild(hidden.firstChild);
      window.breaks.length = 0;
      hidden.classList.add("hidden");
      toggle.classList.add("hidden");
      toggle.classList.remove("close");
      window.updateNav();
    }
    window.dispatchEvent(new Event("resize"));
  }

  function applyLanguage(language, remember) {
    var dictionary = translations[language] || {};
    var readingAnchor;
    var anchorTop;
    if (remember) {
      var headerBottom = document.querySelector(".masthead").getBoundingClientRect().bottom;
      readingAnchor = Array.from(document.querySelectorAll(".page__content h1, .page__content h2, .page__content h3, .page__content p, .page__content li")).find(function (element) {
        var bounds = element.getBoundingClientRect();
        return bounds.height > 0 && bounds.bottom > headerBottom;
      });
      if (readingAnchor) anchorTop = readingAnchor.getBoundingClientRect().top;
    }

    document.documentElement.lang = locales[language];
    textEntries.forEach(function (entry) {
      var value = dictionary[entry.key];
      if (typeof value !== "string") value = entry.english;
      if (entry.html) entry.element.innerHTML = value;
      else entry.element.textContent = value;
    });
    labelEntries.forEach(function (entry) {
      entry.element.setAttribute("aria-label", dictionary[entry.key] || entry.english);
    });
    dateEntries.forEach(function (entry) {
      var element = entry.element;
      var options = { year: "numeric", month: "long", timeZone: "UTC" };
      if (element.dataset.datePrecision !== "month") options.day = "numeric";
      element.textContent = language === "en" ? entry.english : new Intl.DateTimeFormat(locales[language], options).format(new Date(element.dataset.i18nDate + "T12:00:00Z"));
    });
    var pageTitle = document.querySelector(".post-title, .blog-header h1");
    document.title = pageTitle ? pageTitle.textContent + " | Zhichao Wang" : (dictionary["site.title"] || englishTitle);
    switcher.querySelectorAll("[data-language]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    switcher.hidden = false;
    updateLinks(language);
    resizeNavigation();

    if (remember) {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", language);
      window.history.replaceState(window.history.state, "", url);
      try { window.localStorage.setItem(storageKey, language); } catch (error) { /* Optional preference storage. */ }
      if (readingAnchor) window.scrollBy(0, readingAnchor.getBoundingClientRect().top - anchorTop);
    }
  }

  switcher.addEventListener("click", function (event) {
    var button = event.target.closest("[data-language]");
    if (button && switcher.contains(button)) applyLanguage(button.dataset.language, true);
  });
  window.addEventListener("popstate", function () { applyLanguage(getLanguage(), false); });
  applyLanguage(getLanguage(), false);
})();
