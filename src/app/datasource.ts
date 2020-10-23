export let viewsData: Array<string> = ['Day', 'Week', 'Month'];

export let doctorsData: { [key: string]: Object }[] = [
    {
        Name: 'Dr.Swapnil Giri',
        Gender: 'Male',
        Text: 'Swapnil-Giri',
        Id: 1,
        DepartmentId: 1,
        Color: '#ea7a57',
        Education: 'MBBS, MD',
        Specialization: 'Prediatrition',
        Experience: '2+ years',
        Designation: 'DCH',
        DutyTiming: 'Shift1',
        Email: 'swapnilgiri@gmail.com',
        Mobile: '9422962284',
        Availability: 'busy',
        StartHour: '08:00',
        EndHour: '17:00',
        AvailableDays: [0, 2, 3, 4, 5],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 1, 8, 0),
                WorkEndHour: new Date(2018, 6, 1, 17, 0),
                BreakStartHour: new Date(2018, 6, 1, 12, 0),
                BreakEndHour: new Date(2018, 6, 1, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 2, 8, 0),
                WorkEndHour: new Date(2018, 6, 2, 17, 0),
                BreakStartHour: new Date(2018, 6, 2, 12, 0),
                BreakEndHour: new Date(2018, 6, 2, 13, 0),
                State: 'TimeOff',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 3, 8, 0),
                WorkEndHour: new Date(2018, 6, 3, 17, 0),
                BreakStartHour: new Date(2018, 6, 3, 12, 0),
                BreakEndHour: new Date(2018, 6, 3, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 4, 8, 0),
                WorkEndHour: new Date(2018, 6, 4, 17, 0),
                BreakStartHour: new Date(2018, 6, 4, 12, 0),
                BreakEndHour: new Date(2018, 6, 4, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 5, 8, 0),
                WorkEndHour: new Date(2018, 6, 5, 17, 0),
                BreakStartHour: new Date(2018, 6, 5, 12, 0),
                BreakEndHour: new Date(2018, 6, 5, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 6, 8, 0),
                WorkEndHour: new Date(2018, 6, 6, 17, 0),
                BreakStartHour: new Date(2018, 6, 6, 12, 0),
                BreakEndHour: new Date(2018, 6, 6, 13, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 7, 8, 0),
                WorkEndHour: new Date(2018, 6, 7, 17, 0),
                BreakStartHour: new Date(2018, 6, 7, 12, 0),
                BreakEndHour: new Date(2018, 6, 7, 13, 0),
                State: 'TimeOff'
            }
        ]
    },
    {
        Name: 'Dr.Vaibhav Giri',
        Gender: 'Male',
        Text: 'vaibhav-giri',
        Id: 2,
        DepartmentId: 2,
        Color: '#7fa900',
        Education: 'MBBS, MD Consultant Gynaecologist',
        Specialization: 'Gynaecologist',
        Experience: '3+ years',
        Designation: 'Consultant Gynaecologist',
        Email: 'vaibhavgiri@gmail.com',
        DutyTiming: 'Shift2',
        Mobile: '7351255456',
        Availability: 'available',
        StartHour: '10:00',
        EndHour: '19:00',
        AvailableDays: [0, 1, 2, 3, 4],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 1, 10, 0),
                WorkEndHour: new Date(2018, 6, 1, 19, 0),
                BreakStartHour: new Date(2018, 6, 1, 14, 0),
                BreakEndHour: new Date(2018, 6, 1, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 2, 10, 0),
                WorkEndHour: new Date(2018, 6, 2, 19, 0),
                BreakStartHour: new Date(2018, 6, 2, 14, 0),
                BreakEndHour: new Date(2018, 6, 2, 15, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 3, 10, 0),
                WorkEndHour: new Date(2018, 6, 3, 19, 0),
                BreakStartHour: new Date(2018, 6, 3, 14, 0),
                BreakEndHour: new Date(2018, 6, 3, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 4, 10, 0),
                WorkEndHour: new Date(2018, 6, 4, 19, 0),
                BreakStartHour: new Date(2018, 6, 4, 14, 0),
                BreakEndHour: new Date(2018, 6, 4, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 5, 10, 0),
                WorkEndHour: new Date(2018, 6, 5, 19, 0),
                BreakStartHour: new Date(2018, 6, 5, 14, 0),
                BreakEndHour: new Date(2018, 6, 5, 15, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 6, 10, 0),
                WorkEndHour: new Date(2018, 6, 6, 19, 0),
                BreakStartHour: new Date(2018, 6, 6, 14, 0),
                BreakEndHour: new Date(2018, 6, 6, 15, 0),
                State: 'TimeOff',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 7, 10, 0),
                WorkEndHour: new Date(2018, 6, 7, 19, 0),
                BreakStartHour: new Date(2018, 6, 7, 14, 0),
                BreakEndHour: new Date(2018, 6, 7, 15, 0),
                State: 'TimeOff'
            }
        ]
    },
    {
        Name: 'Dr. Snehal Giri',
        Gender: 'Female',
        Text: 'snehal-giri',
        Id: 3,
        DepartmentId: 1,
        Color: '#fec200',
        Education: 'MBBS, MD',
        Specialization: 'Anaesthesiolgist',
        Experience: '1+ years',
        Designation: 'Consultant Anaesthesiolgist',
        DutyTiming: 'Shift3',
        Email: 'snehalgiri@gmail.com',
        Mobile: '7845415426',
        Availability: 'away',
        StartHour: '12:00',
        EndHour: '21:00',
        AvailableDays: [1, 2, 3, 4, 5],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 1, 12, 0),
                WorkEndHour: new Date(2018, 6, 1, 21, 0),
                BreakStartHour: new Date(2018, 6, 1, 16, 0),
                BreakEndHour: new Date(2018, 6, 1, 17, 0),
                State: 'TimeOff',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 2, 12, 0),
                WorkEndHour: new Date(2018, 6, 2, 21, 0),
                BreakStartHour: new Date(2018, 6, 2, 16, 0),
                BreakEndHour: new Date(2018, 6, 2, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 3, 12, 0),
                WorkEndHour: new Date(2018, 6, 3, 21, 0),
                BreakStartHour: new Date(2018, 6, 3, 16, 0),
                BreakEndHour: new Date(2018, 6, 3, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 4, 12, 0),
                WorkEndHour: new Date(2018, 6, 4, 21, 0),
                BreakStartHour: new Date(2018, 6, 4, 16, 0),
                BreakEndHour: new Date(2018, 6, 4, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 5, 12, 0),
                WorkEndHour: new Date(2018, 6, 5, 21, 0),
                BreakStartHour: new Date(2018, 6, 5, 16, 0),
                BreakEndHour: new Date(2018, 6, 5, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 6, 12, 0),
                WorkEndHour: new Date(2018, 6, 6, 21, 0),
                BreakStartHour: new Date(2018, 6, 6, 16, 0),
                BreakEndHour: new Date(2018, 6, 6, 17, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 7, 12, 0),
                WorkEndHour: new Date(2018, 6, 7, 21, 0),
                BreakStartHour: new Date(2018, 6, 7, 16, 0),
                BreakEndHour: new Date(2018, 6, 7, 17, 0),
                State: 'TimeOff'
            }
        ]
    },
    
];

export let patientsData: { [key: string]: Object }[] = [
    {
        Id: 1,
        Name: 'Shreyas',
        Text: 'shreyas',
        DOB: new Date(1998, 8, 3),
        Mobile: '9412345676',
        Email: 'shreyas@jmail.com',
        Address: 'Parbhani, Maharashtra',
        Disease: ' Fever, fatigue',
        DepartmentName: 'GENERAL',
        BloodGroup: 'O+ve',
        Gender: 'Male',
        Symptoms: 'Sweating, Chills and Shivering'
    },
    {
        Id: 2,
        Name: 'Vishal',
        Text: 'vishal',
        DOB: new Date(1992, 3, 5),
        Mobile: '9454545454',
        Email: 'vishal@gmail.com',
        Address: 'Wardha, Maharashtra',
        Disease: 'Bone fracture',
        DepartmentName: 'ORTHOPEDICS',
        BloodGroup: 'AB+ve',
        Gender: 'Male',
        Symptoms: 'Swelling or bruising over a bone',
    },
    {
        Id: 3,
        Name: 'Dipak',
        Text: 'dipak',
        DOB: new Date(1985, 2, 3),
        Mobile: '94455555555',
        Email: 'dipak@gmail.com',
        Address: 'Nagpur, Maharashtra',
        Disease: 'Eyes',
        DepartmentName: 'GENERAL',
        BloodGroup: 'B+ve',
        Gender: 'Male',
        Symptoms: 'Frequent eye fatigue',
    },
    {
        Id: 4,
        Name: 'Utkarsh',
        Text: 'utkarsh',
        DOB: new Date(2000, 7, 3),
        Mobile: '9513135345',
        Email: 'utkarsh@gmail.com',
        Address: 'Solapur, Mah',
        Disease: 'Biological Problem',
        DepartmentName: 'GENERAL',
        BloodGroup: 'B+ve',
        Gender: 'Male',
        Symptoms: 'Physical pain',
    },
    {
        Id: 5,
        Name: 'Pallavi',
        Text: 'Pallavi',
        DOB: new Date(2005, 4, 29),
        Mobile: '9744454555',
        Email: 'pallavi@gmail.com',
        Address: 'Ytl, Maha',
        Disease: 'Skin infection',
        DepartmentName: 'DERMATOLOGY',
        BloodGroup: 'AB-ve',
        Gender: 'Female',
        Symptoms: 'red bumps'
    },
    {
        Id: 6,
        Name: 'Anirudha',
        Text: 'ani',
        DOB: new Date(1989, 10, 29),
        Mobile: '9425454554',
        Email: 'ani@gmail.com',
        Address: 'Mumbai, Maha',
        Disease: 'Arm Fracture',
        DepartmentName: 'ORTHOPEDICS',
        BloodGroup: 'B+ve',
        Gender: 'Male',
        Symptoms: 'Swelling, redness',
    },
    {
        Id: 7,
        Name: 'Shreyanshi',
        Text: 'shreyanshi',
        DOB: new Date(1998, 10, 29),
        Mobile: '9415135434',
        Email: 'shreyanshi@gmail.com',
        Address: 'Nagpur',
        Disease: 'HeartBeat raising',
        DepartmentName: 'CARDIOLOGY',
        BloodGroup: 'B+ve',
        Gender: 'Female',
        Symptoms: 'A pain in your chest',
    }
];

export let waitingList: { [key: string]: Object }[] = [
    {
        Id: 1,
        Name: 'Shreyas',
        StartTime: new Date(2018, 6, 3, 8, 30),
        EndTime: new Date(2018, 6, 3, 9, 30),
        Disease: 'Sudden loss of vision',
        DepartmentName: 'GENERAL',
        Treatment: 'CHECKUP',
        DepartmentId: 1,
        PatientId: 1
    }, {
        Id: 2,
        Name: 'Vishal',
        StartTime: new Date(2018, 6, 4, 8, 30),
        EndTime: new Date(2018, 6, 4, 10, 30),
        Disease: 'Bone Fracture',
        DepartmentName: 'ORTHOPEDICS',
        Treatment: 'SURGERY',
        DepartmentId: 4,
        PatientId: 2
    }, {
        Id: 3,
        Name: 'Vaishnavi',
        StartTime: new Date(2018, 6, 4, 9, 30),
        EndTime: new Date(2018, 6, 4, 10, 30),
        Disease: 'Skin Hives',
        DepartmentName: 'DERMATOLOGY',
        Treatment: 'CHECKUP',
        DepartmentId: 3,
        PatientId: 3
    }
];

export let hospitalData: Object[] = [
    {
        Id: 1000,
        Name: 'Pooja',
        StartTime: new Date(2018, 6, 5, 10, 30),
        EndTime: new Date(2018, 6, 5, 11, 30),
        Disease: 'Bone Fracture',
        DepartmentName: 'ORTHOPEDICS',
        DepartmentId: 4,
        DoctorId: 5,
        PatientId: 2,
        Symptoms: 'Swelling or bruising over a bone, Pain in the injured area'
    }, {
        Id: 1001,
        Name: 'Shreyanshi',
        StartTime: new Date(2018, 6, 3, 11, 0),
        EndTime: new Date(2018, 6, 3, 12, 0),
        Disease: 'Biological Problems',
        DepartmentName: 'GENERAL',
        DepartmentId: 1,
        DoctorId: 3,
        PatientId: 4,
        Symptoms: 'Physical aches or pain, Memory difficulties or personality changes'
    }, {
        Id: 1002,
        Name: 'Dipak',
        Disease: 'Skin Problem',
        DepartmentName: 'DERMATOLOGY',
        DepartmentId: 3,
        StartTime: new Date(2018, 6, 2, 10, 0),
        EndTime: new Date(2018, 6, 2, 11, 0),
        DoctorId: 4,
        PatientId: 5,
        Symptoms: 'outbreak of swollen, pale red bumps or plaques'
    }, {
        Id: 1003,
        Name: 'Vishal',
        Disease: 'Feeling very hungry - even though you are eating',
        DepartmentName: 'DIABETOLOGY',
        DepartmentId: 5,
        StartTime: new Date(2018, 6, 9, 10, 0),
        EndTime: new Date(2018, 6, 9, 11, 0),
        DoctorId: 6,
        PatientId: 1,
        Symptoms: 'Urinating often, Extreme fatigue, Blurry vision'
    }, {
        Id: 1004,
        Name: 'Ashish',
        Disease: 'Skin care treatment',
        DepartmentName: 'DERMATOLOGIST',
        DepartmentId: 3,
        StartTime: new Date(2018, 6, 7, 10, 0),
        EndTime: new Date(2018, 6, 7, 11, 0),
        DoctorId: 4,
        PatientId: 2,
        Symptoms: 'Scaly or rough skin, Peeling skin, open sores or lesions'
    }, {
        Id: 1005,
        Name: 'Vaishnavi',
        Disease: 'General Checkup',
        DepartmentName: 'GENERAL',
        DepartmentId: 1,
        StartTime: new Date(2018, 6, 7, 13, 30),
        EndTime: new Date(2018, 6, 7, 14, 0),
        DoctorId: 1,
        PatientId: 3,
        Symptoms: 'Decreased energy, Chronic fatigue, Difficulty concentrating'
    }, {
        Id: 1006,
        Name: 'Anirudha',
        Disease: 'Left Arm Fracture',
        DepartmentName: 'ORTHOPEDICS',
        DepartmentId: 4,
        StartTime: new Date(2018, 6, 7, 16, 0),
        EndTime: new Date(2018, 6, 7, 17, 0),
        DoctorId: 5,
        PatientId: 6,
        Symptoms: 'Swelling, warmth, or redness in the joint'
    }, {
        Id: 1007,
        Name: 'Utkarsh',
        Disease: 'Chest Pain',
        DepartmentName: 'CARDIOLOGY',
        DepartmentId: 6,
        StartTime: new Date(2018, 6, 13, 11, 0),
        EndTime: new Date(2018, 6, 13, 11, 30),
        DoctorId: 7,
        PatientId: 2,
        Symptoms: 'Shortness of breath, Swollen feet or ankles'
    }, {
        Id: 1008,
        Name: 'Pallavi',
        Disease: 'Skin Care Treatment',
        DepartmentName: 'DERMATOLOGIST',
        DepartmentId: 3,
        StartTime: new Date(2018, 6, 13, 9, 0),
        EndTime: new Date(2018, 6, 13, 10, 0),
        DoctorId: 4,
        PatientId: 2,
        Symptoms: 'a rash, which might be painful or itchy'
    }, {
        Id: 1009,
        Name: 'Ashish',
        Disease: 'Surgery Treatment',
        DepartmentName: 'GENERAL',
        DepartmentId: 1,
        StartTime: new Date(2018, 6, 10, 14, 0),
        EndTime: new Date(2018, 6, 10, 16, 0),
        DoctorId: 1,
        PatientId: 3,
        Symptoms: 'Pain at Site, Swelling/Hardening'
    }, {
        Id: 1010,
        Name: 'Akshay',
        Disease: 'Bone Problem',
        DepartmentName: 'ORTHOPEDICS',
        DepartmentId: 4,
        StartTime: new Date(2018, 6, 11, 11, 0),
        EndTime: new Date(2018, 6, 11, 13, 0),
        DoctorId: 5,
        PatientId: 3,
        Symptoms: 'Recurring or constant joint pain or tenderness'
    }, {
        Id: 1011,
        Name: 'Vishal',
        Disease: 'General Checkup',
        DepartmentName: 'GENERAL',
        DepartmentId: 1,
        StartTime: new Date(2018, 6, 1, 11, 0),
        EndTime: new Date(2018, 6, 1, 12, 0),
        DoctorId: 1,
        PatientId: 3,
        Symptoms: 'a pulsating feeling in the head, sensitivity to sound and light'
    }, {
        Id: 1012,
        Name: 'Akshay',
        Disease: 'Complete loss of sensation',
        DepartmentName: 'NEUROLOGY',
        DepartmentId: 2,
        StartTime: new Date(2018, 6, 1, 16, 30),
        EndTime: new Date(2018, 6, 1, 17, 30),
        DoctorId: 2,
        PatientId: 4,
        Symptoms: 'Partial or complete paralysis, Muscle weakness'
    },{
        Id: 1013,
        Name: 'Avanti',
        StartTime: new Date(2018, 6, 5, 13, 0),
        EndTime: new Date(2018, 6, 5, 14, 0),
        Disease: 'Health Checkup',
        DepartmentName: 'GENERAL',
        DepartmentId: 1,
        DoctorId: 1,
        PatientId: 1,
        Symptoms: 'Sweating, Chills and Shivering'
    },{
        Id: 1027,
        Name: 'Anirudha',
        Disease: 'Heart Problem',
        DepartmentName: 'CARDIOLOGY',
        DepartmentId: 6,
        StartTime: new Date(2018, 6, 3, 14, 0),
        EndTime: new Date(2018, 6, 3, 14, 30),
        DoctorId: 7,
        PatientId: 2,
        Symptoms: 'Fluid buildup from being overweight'
    }, {
        Id: 1028,
        Name: 'Vishal',
        Disease: 'Dizziness',
        DepartmentName: 'DIABETOLOGY',
        DepartmentId: 5,
        StartTime: new Date(2018, 6, 5, 19, 0),
        EndTime: new Date(2018, 6, 5, 19, 30),
        DoctorId: 6,
        PatientId: 2,
        Symptoms: 'Feeling of lightheadedness or nearly fainting'
    }];

export let specializationData: Object[] = [
    { DepartmentId: 1, Id: 'prediatrics', Text: 'Prediatrition', Color: '#F538B2' },
    { DepartmentId: 2, Id: 'gynaecolgy', Text: 'Gynaecologist', Color: '#33C7E8' },
    { DepartmentId: 3, Id: 'anaesthesiolgy', Text: 'Anaesthesiolgy', Color: '#916DE4' },
    { DepartmentId: 4, Id: 'orthopedics', Text: 'Orthopedics', Color: '#388CF5' },
    { DepartmentId: 6, Id: 'cardiology', Text: 'Cardiology', Color: '#F29438' },
    { DepartmentId: 7, Id: 'dermatology', Text: 'Dermatology', Color: '#F29438' }
,   { DepartmentId: 8, Id: 'generalmedicine', Text: 'General Medicine', Color: '#F29438' }
,
    { DepartmentId: 9, Id: 'neurology', Text: 'Neurology', Color: '#F29438' }
];

export let experienceData: Object[] = [
    { Id: '1+ years', Text: '1+ years' },
    { Id: '2+ years', Text: '2+ years' },
    { Id: '5+ years', Text: '5+ years' },
    { Id: '10+ years', Text: '10+ years' },
    { Id: '15+ years', Text: '15+ years' },
    { Id: '20+ years', Text: '20+ years' }
];

export let dutyTimingsData: Object[] = [
    { Id: 'Shift1', Text: '08:00 AM - 5:00 PM' },
    { Id: 'Shift2', Text: '10:00 AM - 7:00 PM' },
    { Id: 'Shift3', Text: '12:00 AM - 9:00 PM' }
];

export let activityData: Object[] = [
    {
        Name: 'Added New Doctor',
        Message: 'Dr. Swapnil Giri, Cardiologist',
        Time: '5 mins ago',
        Type: 'doctor',
        ActivityTime: new Date(2018, 6, 1, 9, 0)
    },
    {
        Name: 'Added New Appointment',
        Message: 'Vishal for General Checkup on 7th July, 2020 8.30 AM with Dr. Vaibhav Giri',
        Time: '5 mins ago',
        Type: 'appointment',
        ActivityTime: new Date(2018, 6, 1, 11, 0)
    },
    {
        Name: 'Added New Patient',
        Message: 'Abhishekh for Fever and cold',
        Time: '5 mins ago',
        Type: 'patient',
        ActivityTime: new Date(2018, 6, 1, 10, 0)
    },
    {
        Name: 'Added New Appointment',
        Message: 'Ramesh for consultation on 7th Feb, 2019 @ 11.10AM with Dr.Snehal',
        Time: '5 mins ago',
        Type: 'appointment',
        ActivityTime: new Date(2018, 6, 1, 11, 0)
    }
];


// Preference module data

export let timeSlots: Object[] = [
    { Value: 10, Text: '10 min' },
    { Value: 20, Text: '20 min' },
    { Value: 30, Text: '30 min' },
    { Value: 60, Text: '60 min' },
    { Value: 120, Text: '120 min' }
];

export let startHours: Object[] = [
    { Value: '08:00', Text: '8.00 am' },
    { Value: '09:00', Text: '9.00 am' },
    { Value: '10:00', Text: '10.00 am' },
    { Value: '11:00', Text: '11.00 am' },
    { Value: '12:00', Text: '12.00 am' }
];

export let endHours: Object[] = [
    { Value: '16:00', Text: '4.00 pm' },
    { Value: '17:00', Text: '5.00 pm' },
    { Value: '18:00', Text: '6.00 pm' },
    { Value: '19:00', Text: '7.00 pm' },
    { Value: '20:00', Text: '8.00 pm' },
    { Value: '21:00', Text: '9.00 pm' }
];

export let views: Object[] = [
    { Value: 'Day', Text: 'Daily' },
    { Value: 'Week', Text: 'Weekly' },
    { Value: 'Month', Text: 'Monthly' }
];

export let colorCategory: Object[] = [
    { Value: 'Departments', Text: 'Department Colors' },
    { Value: 'Doctors', Text: 'Doctors Colors' }
];

export let bloodGroupData: Object[] = [
    { Value: 'AB+ve', Text: 'AB+ ve' },
    { Value: 'A+ve', Text: 'A+ ve' },
    { Value: 'B+ve', Text: 'B+ ve' },
    { Value: 'O+ve', Text: 'O+ ve' },
    { Value: 'AB-ve', Text: 'AB- ve' },
    { Value: 'A-ve', Text: 'A- ve' },
    { Value: 'B-ve', Text: 'B- ve' },
    { Value: 'O-ve', Text: 'O- ve' }
];

export let dayOfWeekList: Object[] = [
    { Value: 0, Text: 'Sunday' },
    { Value: 1, Text: 'Monday' },
    { Value: 2, Text: 'Tuesday' },
    { Value: 3, Text: 'Wednesday' },
    { Value: 4, Text: 'Thursday' },
    { Value: 5, Text: 'Friday' },
    { Value: 6, Text: 'Saturday' }
];

// shift wise block data
export let shift1BlockData = [
    {
        Id: 50,
        Name: 'Off Work',
        StartTime: new Date(2018, 6, 2, 17, 0),
        EndTime: new Date(2018, 6, 2, 21, 0),
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
        IsAllDay: false,
        IsBlock: true,
        DoctorId: [1, 2, 3, 4, 5, 6, 7]
    }
];

export let shift2BlockData = [
    {
        Id: 51,
        Name: 'Off Work',
        StartTime: new Date(2018, 6, 2, 8, 0),
        EndTime: new Date(2018, 6, 2, 10, 0),
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
        IsAllDay: false,
        IsBlock: true,
        DoctorId: [1, 2, 3, 4, 5, 6, 7]
    }, {
        Id: 52,
        Name: 'Off Work',
        StartTime: new Date(2018, 6, 2, 19, 0),
        EndTime: new Date(2018, 6, 2, 21, 0),
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
        IsAllDay: false,
        IsBlock: true,
        DoctorId: [1, 2, 3, 4, 5, 6, 7]
    },
];

export let shift3BlockData = [
    {
        Id: 53,
        Name: 'Off Work',
        StartTime: new Date(2018, 6, 2, 8, 0),
        EndTime: new Date(2018, 6, 2, 12, 0),
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
        IsAllDay: false,
        IsBlock: true,
        DoctorId: [1, 2, 3, 4, 5, 6, 7]
    }
];
