   let HttpClient = function () {
     this.get = function (aUrl, aCallback) {
       let xhr = new XMLHttpRequest();
       xhr.onreadystatechange = function () {
         if (xhr.readyState == 4 && xhr.status == 200)
           aCallback(xhr.responseText);
       }

       xhr.open("GET", aUrl, true);
       xhr.send(null);
     }
   }

  let client = new HttpClient();


   let showStat = () => {
     client.get(`https://www.googleapis.com/youtube/v3/channels?part=brandingSettings,statistics&id=UC33CqCsFPEHuwhpaES7ORpQ&key=AIzaSyDHfcVmwozE0iZfO65NLegrqpXNis2I7aE`, (response) => {
     let subsCount = JSON.parse(response).items[0].statistics.subscriberCount;
     let viewCount = JSON.parse(response).items[0].statistics.viewCount;
     let channelDescr = JSON.parse(response).items[0].brandingSettings.channel.description;
     document.querySelector('.subs-count').innerHTML = subsCount;
     document.querySelector('.view-count').innerHTML = viewCount;
     document.querySelector('.channel-description').innerHTML = channelDescr;
    //


    console.log(JSON.parse(response));
     });
   };

showStat();
