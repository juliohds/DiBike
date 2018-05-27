type = ['', 'info', 'success', 'warning', 'danger'];


demo = {
    initPickColor: function() {
        $('.pick-class-label').click(function() {
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },

    initDocumentationCharts: function() {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

        dataDailySalesChart = {
            labels: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);
    },

    initDashboardPageCharts: function() {

        /* ----------==========     Daily Sales Chart initialization    ==========---------- */

        dataDailySalesChart = {
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);



        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

        dataCompletedTasksChart = {
            labels: ['5:00', '6:00', '7:00', '8:00', '16:00', '17:00', '18:00'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };

        optionsCompletedTasksChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }

        var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

        // start animation for the Completed Tasks Chart - Line Chart
        md.startAnimationForLineChart(completedTasksChart);


        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dez'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: {
                top: 0,
                right: 5,
                bottom: 0,
                left: 0
            }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function(value) {
                        return value[0];
                    }
                }
            }]
        ];
        var emailsSubscriptionChart = Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

        //start animation for the Emails Subscription Chart
        md.startAnimationForBarChart(emailsSubscriptionChart);

    },

    initGoogleMaps: function() {
        var myLatlng = new google.maps.LatLng(-23.599094, -46.638291);
		
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
			mapTypeId: 'hybrid'
        }
		
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
			
		function getPoints()
		{
			var myData = [
				new google.maps.LatLng(-23.5894562,-46.6349101),
				new google.maps.LatLng(-23.5898262,-46.6349242),
				new google.maps.LatLng(-23.5912015,-46.6353939),
				new google.maps.LatLng(-23.5918688,-46.6360068),
				new google.maps.LatLng(-23.5923438,-46.6363092),
				new google.maps.LatLng(-23.5931083,-46.6364171),
				new google.maps.LatLng(-23.5940933,-46.6364319),
				new google.maps.LatLng(-23.5945364,-46.6364386),
				new google.maps.LatLng(-23.5956467,-46.6364125),
				new google.maps.LatLng(-23.5963878,-46.6363856),
				new google.maps.LatLng(-23.5971535,-46.6363756),
				new google.maps.LatLng(-23.5971535,-46.6363756),
				new google.maps.LatLng(-23.5970238,-46.6354549),
				new google.maps.LatLng(-23.5969919,-46.6348407),
				new google.maps.LatLng(-23.5969304,-46.6341078),
				new google.maps.LatLng(-23.5969193,-46.6334339),
				new google.maps.LatLng(-23.5968733,-46.6329464),
				new google.maps.LatLng(-23.5994676,-46.6345627),
				new google.maps.LatLng(-23.5996568,-46.6326785),
				new google.maps.LatLng(-23.5996654,-46.6327408),
				new google.maps.LatLng(-23.5996913,-46.6336501),
				new google.maps.LatLng(-23.5996538,-46.6356044),
				new google.maps.LatLng(-23.5994288,-46.6379351),
				new google.maps.LatLng(-23.5994939,-46.6384461),
				new google.maps.LatLng(-23.5994939,-46.6385588), 
				new google.maps.LatLng(-23.5994086,-46.6388596),
				new google.maps.LatLng(-23.598662,-46.6381944 ),
				new google.maps.LatLng(-23.5986067,-46.6379209),
				new google.maps.LatLng(-23.5985416,-46.6371511),
				new google.maps.LatLng(-23.5989582,-46.6370867),
				new google.maps.LatLng(-23.5994541,-46.6370444),
				new google.maps.LatLng(-23.5982116,-46.6398199),
				new google.maps.LatLng(-23.5975179,-46.640135 ),
				new google.maps.LatLng(-23.5977483,-46.6398279),
				new google.maps.LatLng(-23.5975179,-46.6401350),
				new google.maps.LatLng(-23.5974761,-46.6395946),
				new google.maps.LatLng(-23.5974699,-46.6389713),
				new google.maps.LatLng(-23.5976604,-46.6390022),
				new google.maps.LatLng(-23.5978878,-46.6390076),
				new google.maps.LatLng(-23.5984199,-46.6390049),
				new google.maps.LatLng(-23.6038327,-46.6480435),
				new google.maps.LatLng(-23.6038327,-46.6502322),
				new google.maps.LatLng(-23.6038966,-46.6491915),
				new google.maps.LatLng(-23.6039064,-46.6455383),
				new google.maps.LatLng(-23.6039064,-46.6466326),
				new google.maps.LatLng(-23.603931,-46.6451869 ),
				new google.maps.LatLng(-23.6039752,-46.6436071),
				new google.maps.LatLng(-23.6039752,-46.6441543),
				new google.maps.LatLng(-23.603926,-46.6426603 ),
				new google.maps.LatLng(-23.603926,-46.6432075 ),
				new google.maps.LatLng(-23.603953,-46.6418047 ),
				new google.maps.LatLng(-23.6038744,-46.640705 ),
				new google.maps.LatLng(-23.6038719,-46.6390286),
				new google.maps.LatLng(-23.6040784,-46.6379718),
				new google.maps.LatLng(-23.6040784,-46.638519 ),
				new google.maps.LatLng(-23.6040784,-46.6390662),
				new google.maps.LatLng(-23.6040317,-46.6377412),
				new google.maps.LatLng(-23.6040415,-46.6376084),
				new google.maps.LatLng(-23.6040243,-46.6369365),
				new google.maps.LatLng(-23.6040243,-46.6374837),
				new google.maps.LatLng(-23.6039911,-46.6360044),
				new google.maps.LatLng(-23.6039911,-46.6365516),
				new google.maps.LatLng(-23.6039911,-46.6370988),
				new google.maps.LatLng(-23.6040525,-46.635881 ),
				new google.maps.LatLng(-23.6040452,-46.6350938),
				new google.maps.LatLng(-23.5960855,-46.6407908),
				new google.maps.LatLng(-23.5960855,-46.6429795),
				new google.maps.LatLng(-23.5957168,-46.6449885),
				new google.maps.LatLng(-23.595616,-46.645769  ),
				new google.maps.LatLng(-23.5954452,-46.646799 ),
				new google.maps.LatLng(-23.5953801,-46.6475312),
				new google.maps.LatLng(-23.5953174,-46.6484392),
				new google.maps.LatLng(-23.5952252,-46.6492358),
				new google.maps.LatLng(-23.5952055,-46.6497427),
				new google.maps.LatLng(-23.5951281,-46.6503194),
				new google.maps.LatLng(-23.5955831,-46.6449183),
				new google.maps.LatLng(-23.5957305,-46.6442545),
				new google.maps.LatLng(-23.59591,-46.6435182  ),
				new google.maps.LatLng(-23.5959849,-46.6427927),
				new google.maps.LatLng(-23.5959751,-46.6422267),
				new google.maps.LatLng(-23.595937,-46.6414757 ),
				new google.maps.LatLng(-23.595937,-46.6436644 ),
				new google.maps.LatLng(-23.5964679,-46.639169 ),
				new google.maps.LatLng(-23.5963647,-46.6390242),
				new google.maps.LatLng(-23.5975494,-46.6383643),
				new google.maps.LatLng(-23.5989553,-46.6374953),
				new google.maps.LatLng(-23.6002088,-46.6373505),
				new google.maps.LatLng(-23.601713,-46.6372861 ),
				new google.maps.LatLng(-23.6022488,-46.6369401),
				new google.maps.LatLng(-23.6026888,-46.6359235),
				new google.maps.LatLng(-23.6026888,-46.6364707),
				new google.maps.LatLng(-23.6026495,-46.6341452),
				new google.maps.LatLng(-23.6026495,-46.6346924),
				new google.maps.LatLng(-23.6026716,-46.6336275),
				new google.maps.LatLng(-23.6040562,-46.6340008),
				new google.maps.LatLng(-23.6040611,-46.6344702),
				new google.maps.LatLng(-23.6043094,-46.634493 ),
				new google.maps.LatLng(-23.6048894,-46.6344367),
				new google.maps.LatLng(-23.6052581,-46.6344273),
				new google.maps.LatLng(-23.605682,-46.6343803 ),
				new google.maps.LatLng(-23.605682,-46.6349275 ),
				new google.maps.LatLng(-23.605682,-46.6354747 ),
				new google.maps.LatLng(-23.6063063,-46.6355364),
				new google.maps.LatLng(-23.6063063,-46.6360836),
				new google.maps.LatLng(-23.6070289,-46.6359951),
				new google.maps.LatLng(-23.6070289,-46.6365423),
				new google.maps.LatLng(-23.6074516,-46.6364162),
				new google.maps.LatLng(-23.6080366,-46.636266 ),
				new google.maps.LatLng(-23.6080366,-46.636266 ),
				new google.maps.LatLng(-23.6080366,-46.636266 ),
				new google.maps.LatLng(-23.5765847,-46.6420022),
				new google.maps.LatLng(-23.5762308,-46.6417232),
				new google.maps.LatLng(-23.5772141,-46.6414282),
				new google.maps.LatLng(-23.5771748,-46.6421792),
				new google.maps.LatLng(-23.5783007,-46.6413155),
				new google.maps.LatLng(-23.5785883,-46.640763 ),
				new google.maps.LatLng(-23.5791217,-46.6402963),
				new google.maps.LatLng(-23.5791217,-46.6408435),
				new google.maps.LatLng(-23.5801984,-46.640071 ),
				new google.maps.LatLng(-23.5810072,-46.6394675),
				new google.maps.LatLng(-23.5817373,-46.6390142),
				new google.maps.LatLng(-23.5824256,-46.6383678),
				new google.maps.LatLng(-23.5832736,-46.6378823),
				new google.maps.LatLng(-23.5839398,-46.6373915),
				new google.maps.LatLng(-23.5847633,-46.6370589),
				new google.maps.LatLng(-23.5856654,-46.6362113),
				new google.maps.LatLng(-23.5864299,-46.635868 ),
				new google.maps.LatLng(-23.5872313,-46.6355193),
				new google.maps.LatLng(-23.5880719,-46.6351062),
				new google.maps.LatLng(-23.5891683,-46.6348782),
				new google.maps.LatLng(-23.5894141,-46.6351558),
				new google.maps.LatLng(-23.5899831,-46.6352296),
				new google.maps.LatLng(-23.5904637,-46.635251 ),
				new google.maps.LatLng(-23.5911593,-46.635758 ),
				new google.maps.LatLng(-23.5913731,-46.6364634),
				new google.maps.LatLng(-23.5914874,-46.6365331),
				new google.maps.LatLng(-23.5920171,-46.6367799),
				new google.maps.LatLng(-23.5923846,-46.6371742),
				new google.maps.LatLng(-23.5927127,-46.6374907),
				new google.maps.LatLng(-23.5930679,-46.6380566),
				new google.maps.LatLng(-23.5931767,-46.6381109),
				new google.maps.LatLng(-23.5932799,-46.6385602),
				new google.maps.LatLng(-23.5933783,-46.6387768),
				new google.maps.LatLng(-23.5934545,-46.6392415),
				new google.maps.LatLng(-23.5935233,-46.6396713),
				new google.maps.LatLng(-23.5936382,-46.6402821),
				new google.maps.LatLng(-23.593742,-46.6408139 ),
				new google.maps.LatLng(-23.593742,-46.6413611 ),
				new google.maps.LatLng(-23.5938329,-46.6420652),
				new google.maps.LatLng(-23.5939681,-46.6429517),
				new google.maps.LatLng(-23.5939681,-46.6437805),
				new google.maps.LatLng(-23.5939681,-46.6443277),
				new google.maps.LatLng(-23.5935158,-46.6465915),
				new google.maps.LatLng(-23.5935158,-46.6471387)
			];
			
			for (var p = 0; p < 1500; p++) 
			{
				var rLatD = Math.floor(Math.random() * 3000);
				var rLonD = Math.floor(Math.random() * 3000);
				
				myData.push(
					new google.maps.LatLng(
						(-23.645938 + (rLatD / 15000)), 
						(-46.7327617 + (rLonD / 15000))
					)
				);
			}
			
			return myData;
		}
		
        var heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map
        });
    },
	
	initGoogleMapsLive: function() 
	{
		var startPos = [-23.599094, -46.638291];
		var startPos2 = [-23.645938, -46.7327617];
		
        var myLatlng = new google.maps.LatLng(startPos[0], startPos[1]);
		
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
			mapTypeId: 'roadmap'
        }
		
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

		var speed = 50; // km/h

		var delay = 100;

		function animateMarker(marker, coords, km_h, add)
		{
			var target = 0;
			
			var km_h = km_h || 50;
			
			coords.push([startPos2[0], startPos2[1]]);
			
			function goToPoint()
			{
				var lat = marker.position.lat();
				var lng = marker.position.lng();
				var step = (km_h * 1000 * delay) / 3600000; // in meters
				
				var dest = new google.maps.LatLng(
				coords[target][0] + add, coords[target][1] + add);
				
				var distance =
				google.maps.geometry.spherical.computeDistanceBetween(dest, marker.position);
				
				var numStep = distance / step;
				var i = 0;
				var deltaLat = ((coords[target][0] + add) - lat) / numStep;
				var deltaLng = ((coords[target][1] + add) - lng) / numStep;
				
				function moveMarker()
				{
					lat += deltaLat;
					lng += deltaLng;
					i += step;
					
					if (i < distance)
					{
						marker.setPosition(new google.maps.LatLng(lat, lng));
						setTimeout(moveMarker, delay);
					}
					else
					{   marker.setPosition(dest);
						target++;
						if (target == coords.length){ target = 0; }
						
						setTimeout(goToPoint, delay);
					}
				}
				
				moveMarker();
			}
			
			goToPoint();
		}

		for(var i = 0; i <= 120; i++)
		{
			var myData = new Array();
			var rLatD = 0;
			var rLonD = 0;
			
			for (var p = 0; p < 5; p++) 
			{
				var rLatD = Math.floor(Math.random() * 3000);
				var rLonD = Math.floor(Math.random() * 3000);
				
				myData.push([(startPos2[0] + (rLatD / 20000)), (startPos2[1] + (rLonD / 20000))]);
			}
	
			var velMedia = Math.floor(Math.random() * 19) + 1;
			var varIcon = "https://image.ibb.co/ejpF8J/icon_green.png";
			var varStatus = "<li>Status: Pré-Aprovado</li>";
			
			if(i == "55" || i == "72")
			{
				velMedia = 52.1;
				varIcon = "https://image.ibb.co/eeOVqo/bike_map_2_1.png";
				varStatus = "<li>Status: Pré-Aprovação Cancelada</li>";
			}
			
			if(i == "66")
			{
				velMedia = 18.6;
				varIcon = "https://image.ibb.co/iQK42d/icon_yellow.png";
				varStatus = "<li>Status: Pré-Aprovação Cancelada</li>";
				
				geraMarker(0, 0);
				geraMarker(5000, 1);
			}
			
			if(i != "55" | i != "66")
			{
				geraMarker(0, 0);
			}
	
			function geraMarker(add, id)
			{
				var contentString = 
				'<h4>ID: bbc44ce5-83d3-410d-a16e-d13f9a60f'+ i + id +'</h4>'+
				'<ul>'+
				'<li>Velocidade M&eacute;dia: '+ velMedia +'Km/h</li>'+
				'<li>Dire&ccedil;&atilde;o: Norte</li>'+
				varStatus +
				'</ul>'
				
				if(i == "55" || i == "72")
				{
					contentString = contentString + '<input type="button" value="Cancelar Benefício Definitivamente" onclick="cancViagem('+i+')"/><div id="statusCanc_'+i+'"></div>';
				};

				var infowindow = new google.maps.InfoWindow()

				var marker = new google.maps.Marker({
					icon: varIcon,
					position: new google.maps.LatLng((startPos2[0] + (rLatD / 15000) + add), (startPos2[1] + (rLonD / 15000) + add)),
					map: map
				});
						
				google.maps.event.addListener(marker,'click', (function(marker,contentString,infowindow){ 
					return function() {
					   infowindow.setContent(contentString);
					   infowindow.open(map,marker);
					};
				})(marker,contentString,infowindow)); 
							
				google.maps.event.addListenerOnce(map, 'idle', (function(marker, myData)
				{ 
					return function() 
					{
					   animateMarker(marker, myData, speed, add);
					};
				})(marker, myData)); 
			}
		}
    },

    showNotification: function(from, align) {
        color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }
}

function cancViagem(id)
{
	document.getElementById("statusCanc_"+ id).innerHTML="<br/> Benefício Cancelado!"
}