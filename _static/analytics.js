const analyticsScript = document.createElement("script");

analyticsScript.setAttribute("src", "https://mk-analytics.dathere.com/api/script.js");
analyticsScript.dataset["site-id"] = 4;
analyticsScript.dataset["track-query"] = true;
analyticsScript.dataset["session-replay"] = true;
analyticsScript.dataset["track-errors"] = true;
analyticsScript.async = true;
analyticsScript.defer = true;

document.getElementsByTagName('head')[0].appendChild(analyticsScript);
