const analyticsScript = document.createElement("script");

analyticsScript.setAttribute("src", "https://mk-analytics.dathere.com/api/script.js");
analyticsScript.dataset.siteId = "4";
analyticsScript.dataset.webVitals = "true";
analyticsScript.dataset.sessionReplay = "true";
analyticsScript.dataset.trackErrors = "true";
analyticsScript.async = "true";
analyticsScript.defer = "true";

document.head.appendChild(analyticsScript);
