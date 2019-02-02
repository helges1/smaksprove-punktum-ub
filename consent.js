    var elem = document.createElement('script');
    elem.src = 'https://quantcast.mgr.consensu.org/cmp.js';
    elem.async = true;
    elem.type = "text/javascript";
    var scpt = document.getElementsByTagName('script')[0];
    scpt.parentNode.insertBefore(elem, scpt);
    (function() {
    var gdprAppliesGlobally = false;
    function addFrame() {
        if (!window.frames['__cmpLocator']) {
        if (document.body) {
            var body = document.body,
                iframe = document.createElement('iframe');
            iframe.style = 'display:none';
            iframe.name = '__cmpLocator';
            body.appendChild(iframe);
        } else {
            // In the case where this stub is located in the head,
            // this allows us to inject the iframe more quickly than
            // relying on DOMContentLoaded or other events.
            setTimeout(addFrame, 5);
        }
        }
    }
    addFrame();
    function cmpMsgHandler(event) {
        var msgIsString = typeof event.data === "string";
        var json;
        if(msgIsString) {
        json = event.data.indexOf("__cmpCall") != -1 ? JSON.parse(event.data) : {};
        } else {
        json = event.data;
        }
        if (json.__cmpCall) {
        var i = json.__cmpCall;
        window.__cmp(i.command, i.parameter, function(retValue, success) {
            var returnMsg = {"__cmpReturn": {
            "returnValue": retValue,
            "success": success,
            "callId": i.callId
            }};
            event.source.postMessage(msgIsString ?
            JSON.stringify(returnMsg) : returnMsg, '*');
        });
        }
    }
    window.__cmp = function (c) {
        var b = arguments;
        if (!b.length) {
        return __cmp.a;
        }
        else if (b[0] === 'ping') {
        b[2]({"gdprAppliesGlobally": gdprAppliesGlobally,
            "cmpLoaded": false}, true);
        } else if (c == '__cmp')
        return false;
        else {
        if (typeof __cmp.a === 'undefined') {
            __cmp.a = [];
        }
        __cmp.a.push([].slice.apply(b));
        }
    }
    window.__cmp.gdprAppliesGlobally = gdprAppliesGlobally;
    window.__cmp.msgHandler = cmpMsgHandler;
    if (window.addEventListener) {
        window.addEventListener('message', cmpMsgHandler, false);
    }
    else {
        window.attachEvent('onmessage', cmpMsgHandler);
    }
    })();
    window.__cmp('init', {
        'Language': 'no',
    'Initial Screen Title Text': 'Vi bryr oss om ditt personvern',
    'Initial Screen Reject Button Text': 'Jeg aksepterer ikke',
    'Initial Screen Accept Button Text': 'jeg samtykker',
    'Initial Screen Purpose Link Text': 'Se formål',
    'Purpose Screen Title Text': 'Vi bryr oss om ditt personvern',
    'Purpose Screen Body Text': 'Du kan angi samtykkepreferanser og bestemme hvordan du vil at dataene skal brukes basert på formålene nedenfor. Du kan angi dine preferanser for oss uavhengig av tredjepartspartnere. Hver hensikt har en beskrivelse slik at du vet hvordan vi og partnere bruker dataene dine.',
    'Vendor Screen Title Text': 'Vi bryr oss om ditt personvern',
    'Vendor Screen Body Text': 'Du kan angi samtykkepreferanser for hvert enkelt tredjepartsfirma nedenfor. Utvid hver firmalistepost for å se hvilke formål de bruker data for å bidra til å gjøre dine valg. I noen tilfeller kan selskaper avsløre at de bruker dataene dine uten å be om ditt samtykke, basert på deres legitime interesser. Du kan klikke på deres personvernregler for mer informasjon og å melde deg av.',
    'Vendor Screen Accept All Button Text': 'Aksepter alle',
    'Vendor Screen Reject All Button Text': 'Avslå alle',
    'Vendor Screen Purposes Link Text': 'Tilbake til formål',
    'Initial Screen Body Text': 'Vi og våre partnere bruker teknologi som informasjonskapsler på nettstedet vårt for å tilpasse innhold og andre internett teknologier, som sosiale medier, og trafikkanalyse. Klikk nedenfor for å samtykke til bruken av denne teknologien på Internett. Du kan ombestemme deg og endre dine samtykkevalg når som helst.',
    'Initial Screen Body Text Option': 1,
    'Publisher Name': 'Punktum UB Online Powered by Gagogi',
    'Publisher Logo': 'https://helges1.gitlab.io/punktum-ub/logo.png',
    'Publisher Purpose IDs': [1,2,3,4,5],
    'Consent Scope': 'Tjenester',
    'No Option': false,
    'Publisher Purpose Legitimate Interest IDs': [1],
    'Consent Scope Group URL': 'http://gagogi.com/',
    });