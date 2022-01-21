//NOTE: ALL DEVICE IDS/UUIDS, MAC ADDRESSES, IP ADDRESSES, ETC ARE FAKE

//session
let session = {
    notes: [
      {
        media: [
            {
                weight: 0,
                created: '2021-04-20T20:54:34.731Z',
                public_path: 'https://fireboard-media.s3.amazonaws.com/<media_uuid>.jpg',
                mime_type: 'image/jpeg',
                session_cover: true, //doesn't exist if not session cover
                media_uuid: '847dbde1-41c5-40db-a7f3-5d28f95fd939'//faked
              }
        ],
        channel: 1,
        note_uuid: '847dbde1-41c5-40db-a7f3-5d28f95fd939',
        created: '2021-04-20T20:54:34.721Z',
        device: 'c2716a19-6919-41f0-a3c4-28b88624d457',   
        session_id: 0000000,
        note_time: '2021-04-20T20:54:07Z',
        note_text: 'Test note',
        updated: null
      }
    ],
    id: 0000000,
    duration: '1 hour, 29 minutes',
    devices: [
      {
        uuid: 'c2716a19-6919-41f0-a3c4-28b88624d457',     
        id: 000000,
        title: 'Your Device Name',
        hardware_id: 'A1A1AAA11',
        created: '2021-04-20T15:42:52.901Z',
        channels: [
            {
                created: '2021-04-20T19:34:19Z',
                enabled: true,
                id: 55555554,
                sessionid: 0000000,
                channel_label: 'Your Probe Label',
                "alerts": [
                    {
                        "channel": 1,
                        "temp_min": 190,
                        "session_id": 0000000,
                        "notify_app": true,
                        "minutes_repeat": 30,
                        "id": 0000000,
                        "notify_sms": true,
                        "temp_max": 230,
                        "minutes_buffer": 10,
                        "notify_email": true,
                        "time_start": "00:00:01",
                        "created": "2021-04-25T16:13:33Z",
                        "time_stop": "23:59:59",
                        "device_id": 000000,
                        "enabled": true
                    }
                ],
                channel: 1,
                current_temp: 78.1,
                last_templog: [{
                    created: '2021-04-20T21:00:05Z',
                    degreetype: 2,
                    temp: 77.5,
                    channel: 1
                  }]
              },
              {
                created: '2021-04-20T19:34:19Z',
                enabled: true,
                id: 55555555,
                sessionid: 0000000,
                channel_label: 'Channel 2',
                alerts: [],
                channel: 2
              },
              {
                created: '2021-04-20T19:34:19Z',
                enabled: true,
                id: 55555556,
                sessionid: 0000000,
                channel_label: 'Channel 3',
                alerts: [],
                channel: 3
              },
              {
                created: '2021-04-20T19:34:19Z',
                enabled: true,
                id: 55555557,
                sessionid: 0000000,
                channel_label: 'Channel 4',
                alerts: [],
                channel: 4
              },
              {
                created: '2021-04-20T19:34:19Z',
                enabled: true,
                id: 55555558,
                sessionid: 0000000,
                channel_label: 'Channel 5',
                alerts: [],
                channel: 5
              },
              {
                created: '2021-04-20T19:34:19Z',
                enabled: true,
                id: 55555559,
                sessionid: 0000000,
                channel_label: 'Channel 6',
                alerts: [],
                channel: 6
              }
        ],
        channel_count: 6,
        model: 'FBX2',
        active: true,
        last_drivelog: null
      }
    ],
    title: 'test Your Probe Label',
    owner: {
      username: 'username99',
      first_name: 'John',
      last_name: 'Doe',
      id: 12345,
      email: 'johndoe12345@gmail.com',
      userprofile: {
        alert_sms: '',
        alert_emails: 'johndoe12345@gmail.com',
        notification_tone: 'default',
        commercial_user: false,
        user: 54391,
        picture: 'profile_images/default-profile.png',
        company: ''
      }
    },
    last_active: '2021-04-20T21:04:12Z',
    device_ids: [ 'c2716a19-6919-41f0-a3c4-28b88624d457' ],
    end_time: null,
    shared: false,
    drive: false,
    created: '2021-04-20T19:34:16Z',
    start_time: '2021-04-20T19:34:16Z',
    description: 'Testing'
  }
  //device
  let device = {
    uuid: 'c2716a19-6919-41f0-a3c4-28b88624d457',
    id: 000000,
    title: 'Your Device Name',
    hardware_id: 'A1A1AAA11',
    created: '2021-04-20T15:42:52.901Z',
    latest_temps: [
      {
        created: '2021-04-20T20:46:23Z',
        channel: 1,
        temp: 78.1,
        degreetype: 2
      }
    ],
    device_log: {
      bleSignalLevel: -75,
      date: '2021-04-20 20:42:56 UTC',
      diskUsage: '0.1M/4.0M',
      onboardTemp: 80.24,
      version: '3.1.30',
      auxPort: '',
      versionNode: '5.0.0',
      frequency: '2.4 GHz',
      ssid: 'YourSSID',
      vBattPer: 0.9609918705609756,
      cpuUsage: '29%',
      drivesettings: '{"p":4,"s":1,"d":7,"ms":100,"f":0,"l":1}',
      linkquality: '94/100',
      bleClientMAC: '5C:48:60:44:AA:93',
      versionJava: '7.6.5',
      boardID: 'A1A1AAA11',
      versionEspHal: 'HAL: V1R2;MSP: 1.8.0;',
      timeZoneBT: 'America/Chicago',
      versionUtils: '6.1.3',
      txpower: 78,
      commercialMode: 'false',
      nightmode: false,
      uptime: '1:10',
      vBattPerRaw: 0.96,
      macNIC: 'B1:48:46:9D:F3:D5',
      mode: 'Managed',
      publicIP: '55.55.55.555',
      signallevel: -53,
      model: 'FBX2',
      internalIP: '10.0.0.47',
      tempFilter: 'true',
      band: '802.11bgn',
      versionImage: '201703260554',
      deviceID: 'c2716a19-6919-41f0-a3c4-28b88624d457',
      memUsage: '2.6M/4.2M',
      vBatt: 4.1450000000000005,
      macAP: '44:AE:7A:8A:F3:98',
      contrast: '8'
    },
    last_templog: '2021-04-20T20:47:03Z',
    last_battery_reading: 0.9609918705609756,
    channels: [
      {
        created: '2021-04-20T19:34:19Z',
        enabled: true,
        id: 55555554,
        sessionid: 0000000,
        channel_label: 'Your Probe Label',
        alerts: [],
        channel: 1,
        current_temp: 78.1,
        last_templog: [{
            created: '2021-04-20T21:00:05Z',
            degreetype: 2,
            temp: 77.5,
            channel: 1
          }]
      },
      {
        created: '2021-04-20T19:34:19Z',
        enabled: true,
        id: 55555555,
        sessionid: 0000000,
        channel_label: 'Channel 2',
        alerts: [],
        channel: 2
      },
      {
        created: '2021-04-20T19:34:19Z',
        enabled: true,
        id: 55555556,
        sessionid: 0000000,
        channel_label: 'Channel 3',
        alerts: [],
        channel: 3
      },
      {
        created: '2021-04-20T19:34:19Z',
        enabled: true,
        id: 55555557,
        sessionid: 0000000,
        channel_label: 'Channel 4',
        alerts: [],
        channel: 4
      },
      {
        created: '2021-04-20T19:34:19Z',
        enabled: true,
        id: 55555558,
        sessionid: 0000000,
        channel_label: 'Channel 5',
        alerts: [],
        channel: 5
      },
      {
        created: '2021-04-20T19:34:19Z',
        enabled: true,
        id: 55555559,
        sessionid: 0000000,
        channel_label: 'Channel 6',
        alerts: [],
        channel: 6
      }
    ],
    fbj_version: '7.6.5',
    fbn_version: '5.0.0',
    fbu_version: '6.1.3',
    version: '3.1.30',
    probe_config: '8|0|0.0|8|0|0.0|8|0|0.0|8|0|0.0|8|0|0.0|8|0|0.0',
    last_drivelog: null,
    channel_count: 6,
    degreetype: 2,
    model: 'FBX2',
    active: true
  }
  

let temps =  [
    {
      created: '2021-04-20T20:50:35Z',
      degreetype: 2,
      temp: 77.8,
      channel: 1
    }
  ]
let charts = [
    {
      degreetype: 2,
      label: 'Your Probe Label',
      channel_id: 1,
      x: [
        1624217665, 1624217730, 1624217790, 1624217815, 1624217850,
        1624217910, 1624217970, 1624218030, 1624218090, 1624218150,
        1624218210, 1624218270, 1624218335, 1624218395, 1624218455,
        1624218515, 1624218575, 1624218635, 1624218695, 1624218755,
        1624218815, 1624218875, 1624218940, 1624219000, 1624219060,
        1624219120, 1624219180, 1624219240, 1624219300, 1624219340,
        1624219360, 1624219420, 1624219480, 1624219545, 1624219605,
        1624219670, 1624219725, 1624219785, 1624219845, 1624219905,
        1624219965, 1624220025, 1624220085, 1624220145, 1624220210,
        1624220270, 1624220330, 1624220390, 1624220450, 1624220510,
        1624220570, 1624220630, 1624220690, 1624220750, 1624220815,
        1624220875, 1624220935, 1624220995, 1624221055, 1624221115,
        1624221175, 1624221240, 1624221300, 1624221360, 1624221420,
        1624221480, 1624221540, 1624221600, 1624221660, 1624221720,
        1624221780, 1624221840, 1624221900, 1624221965, 1624222025,
        1624222085, 1624222145, 1624222205
      ],
      device: 'c2716a19-6919-41f0-a3c4-28b88624d457',
      y: [
        88.4, 84.2, 81.7, 81.2, 80.5, 79.3, 78.5,   78, 77.8,
        77.6, 77.7, 77.6, 77.9, 77.8, 77.9, 77.9, 77.8, 78.1,
        78.1, 78.1, 78.1, 78.2, 78.2, 78.3, 78.4, 78.4, 78.5,
        78.5, 78.4, 78.2, 78.3, 78.1,   78, 77.8, 77.8, 77.9,
        77.9, 77.8, 77.8, 77.8, 77.8, 77.7, 77.7, 77.6, 77.5,
        77.5, 77.4, 77.4, 77.2, 77.3, 77.2, 77.3, 77.2, 77.1,
        77.2, 77.1, 77.2, 77.2, 77.3, 77.3, 77.5, 77.7, 77.7,
        77.8, 77.9,   78, 78.1, 78.1, 78.3, 78.4, 78.4, 78.3,
        78.3, 78.2,   78, 77.8, 77.7, 77.8
      ]
    }
  ]
