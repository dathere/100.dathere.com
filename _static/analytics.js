const analyticsScript = document.createElement("script");

analyticsScript.setAttribute("src", "https://mk-analytics.dathere.com/api/script.js");
analyticsScript.setAttribute("data-site-id", "4");
analyticsScript.setAttribute("data-track-query", "true");
analyticsScript.setAttribute("data-session-replay", "true");
analyticsScript.setAttribute("data-track-errors", "true");
analyticsScript.setAttribute("async", "true");
analyticsScript.setAttribute("defer", "true");

document.head.appendChild(analyticsScript);
