sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'nssb/incidents/test/integration/FirstJourney',
		'nssb/incidents/test/integration/pages/IncidentsList',
		'nssb/incidents/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('nssb/incidents') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);