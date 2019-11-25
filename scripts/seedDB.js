const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/FitnessConditionsApp",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);


const workOutSeed = [
    {
        "type": "Indoor Workout",
        "name": "Horizontal Push Exercise",
        "bilateral": [
            "Bench Press",
            "Incline Bench Press",
            "Close-Grip Bench Press",
            "Close-Grip Incline Bench Press",
            "Reverse-Grip Bench Press",
            "Push Ups (different Variations)",
            "Dip"
        ],
        "unilateral": [
            "Dumbbell Bench Press",
            "Dumbbell Incline Press",
            "Dumbbell alternating Press",
            "One-Arm Dumbbell Press",
            "One-Arm Dumbbell Incline Press",
            "Side to Side Push Ups",
            "Standing Cable Chest Press ( All 3 Variations )"
        ]
    },
    {
        "type": "Indoor Workout",
        "name": "Vertical Push Exercise",
        "bilateral": [
            "Shoulder Press",
            "Push Press",
            "Push Jerk",
            "Vertical Push UP",
            "Log Press"
        ],
        "unilateral": [
            "Dumbbell or Kettle Bell Shoulder Press",
            "Dumbbell or Kettle Bell alternating press",
            "Dumbell or Kettle Bell One Arm Press",
            "Alternating side to side Vertical Push Up"
        ]
    },
    {
        "type": "Indoor Workout",
        "name": "Vertical Pull Exercise",
        "bilateral": [
            "Chin Up",
            "Pull UP",
            "Alternating Grip Pull Up",
            "Lat Pull Down",
            "Close Grip Pull Up"
        ],
        "unilateral": [
            "One Arm Pull Up",
            "One Arm Lat Pull Down",
            "Alternating Side to side Pull Up",
            "One Arm Alternating Cable Pull Downs"
        ]
    },
    {
        "type": "Indoor Workout",
        "name": "Horizontal Pull Exercise",
        "bilateral": [
            "Bent-Over Row With whatever equipment available",
            "Modified T-bar Row",
            "Horizontal PushUp",
            "Standing Band Row to Ribcage",
            "Standing Band Row to Neck",
            "Band/Cable Face Pull",
            "Bent Over Row With Barbell"
        ],
        "unilateral": [
            "Bent-over Dumbell Alternating Row",
            "Horizontal side to side Pull UP",
            "One arm Horizontal Pull UP",
            "One Arm Cable Pull"
        ]
    },
    {
        "type": "Indoor Workout",
        "name": "Lower Body Exercise( Knee Dominant )",
        "bilateral": [
            "Front Squats",
            "Back Squats",
            "Overhead Squats",
            "Split Squats",
            "Clean Grip Deadlift"
        ],
        "unilateral": [
            "Forward Lunge",
            "Reverse Lunge",
            "Side Lunge",
            "Step Up",
            "Partial One Leg Squat",
            "Single Leg Squat ( Trx/Rings )",
            "SIngle Leg Squat With Bench"
        ]
    },
    {
        "type": "Indoor Workout",
        "name": "Lower Body Exercise( Hip Dominant )",
        "bilateral": [
            "Good Morning",
            "Seated Good Morning",
            "Romananian Deadlift",
            "Deadlift",
            "Trap Bar Deadlift",
            "Reverse Hyperextension"
        ],
        "unilateral": [
            "Single Leg Good Morning",
            "Single Leg Romanian Deadlift ( Barbell, Dumbbell, Kettlebell )",
            "Single Leg Deadlift ( Barbell, Dumbbell, Kettlebell )",
            "Single Leg Back Extension",
            "Single Leg Supine Hip Extension"
        ]
    },
    {
        "type": "Indoor Workout",
        "name": "Core Exercise",
        "exercise": [
            "Russian Twist",
            "Corkscrew",
            "Windshield Wiper",
            "Stand Wall Throws",
            "Turkish Get Ups",
            "Bicycle Kicks",
            "Flutter Kicks",
            "Four Point Plank",
            "Three Point Plank",
            "Side Bridge",
            "Plank ( Elbow to Knee )",
            "Barbell Roller",
            "Trx/Ring ( Knee to Chest )"
        ]
    },
    {
        "type": "Indoor Workout",
        "name": "Explosive Exercise",
        "exercise": [
            "Squat Jump",
            "Hang Power Clean ( Barbell or Dumbbell )",
            "Power Clean ( Barbell or Dumbbell )",
            "Hang Power Snatch ( Barbell or Dumbbell )",
            "Muscle Snatch",
            "Single Arm Dumbell/Kettlebell Snatch",
            "Box Jumps",
            "Single Foot Box Jump"
        ]
    },
    {
        "type": "Outdoor Workout",
        "name": "Conditioning Exercise",
        "exercise": [
            "Sled Push",
            "Sled Pull",
            "Car Push",
            "Car Pull",
            "Wind Sprints",
            "Suicide Sprints",
            "Hill Sprints",
            "Agility Movements/Sprints ( Mulit Directional )",
            "Tire Drag",
            "Farmer Carry ( Whatever Equipment available )",
            "Tire Flips",
            "Heavy Object Pick Up ( Advanced )"
            
        ]
    },
    {
        "type": "Outdoor Workout",
        "name": "Aerobic/Anarobic",
        "exercise": [
            "30/30 = 30 seconds alternating between exercises.",
            "40/40 = 40 seconds alternating between exercises.",
            "50/50 = 50 seconds alternating between exercises.",
            "60/40 = 60 seconds one exercise followed by 40 seconds of the following exercise.",
            "2 minutes aerobic activity: 1 minute anaerobic activity."
        ],
    },
    {
        "type": "Indoor Workout",
        "name": "Stretches",
        "exercise": [
            "Standing Hamstring Stretch",
            "Stand tall with your feet hip-width apart, knees slightly bent, arms by your sides.",
            "Exhale as you bend forward at the hips, lowering your head toward floor, while keeping your head, neck and shoulders relaxed.",
            "Wrap your arms around backs of your legs and hold anywhere from 45 seconds to two minutes.",
            "Bend your knees and roll up when you're done.",
            "Piriformis Stretch",
            "Sit on the floor with both legs extended in front of you.",
            "Cross your right leg over your left, and place your right foot flat on the floor.",
            "Place your right hand on the floor behind your body.",
            "Place your left hand on your right quad or your left elbow on your right knee (as shown) and press your right leg to the left as you twist your torso to the right.",
            "If the spinal rotation bothers your back, take it out and simply use your left hand to pull your right quad in and to the left.",
            "Triceps Stretch",
            "Kneel, sit, or stand tall with feet hip-width apart, arms extended overhead.",
            "Bend your right elbow and reach your right hand to touch the top middle of your back.",
            "Reach your left hand overhead and grasp just below your right elbow.",
            "Gently pull your right elbow down and toward your head.",
            "Switch arms and repeat.",
            "Figure Four Stretch",
            "Lie on your back with your feet flat on the floor.",
            "Cross your left foot over your right quad.",
            "Lift your right leg off the floor. Grab onto the back of your right leg and gently pull it toward your chest.",
            "When you feel a comfortable stretch, hold there.",
            "Hold for 30 seconds to 2 minutes.",
            "Switch sides and repeat.",
            "Butterfly Stretch",
            "Sit tall on the floor with the soles of your feet together, knees bent out to sides.",
            "Hold onto your ankles or feet, engage your abs, and slowly lower your body toward your feet as far as you can while pressing your knees toward the floor.",
            "If you're too tight to bend over, simply press your knees down.",
            "Hold this stretch for 30 seconds to 2 minutes.",
            "Seated Shoulder Squeeze",
            "Sit on the floor with your knees bent and feet flat on the floor.",
            "Clasp your hands behind your lower back.",
            "Straighten and extend your arms and squeeze your shoulder blades together.",
            "Do this for 3 seconds, and then release. Repeat 5 to 10 times.",
            "Lunging Hip Flexor Stretch",
            "Kneel on your left knee. Place your right foot flat on the floor in front of you, knee bent.",
            "Lean forward, stretching your left hip toward the floor.",
            "Squeeze your butt; this will allow you to stretch your hip flexor even more.",
            "Hold for 30 seconds to 2 minutes.",
            "Switch sides and repeat.",
            "Lying Pectoral Stretch",
            "Lie on your stomach with both arms extended to the sides so your body is in a T shape.",
            "Push off the ground with your left hand and bend your left knee for balance as you start to roll to your right side. You should feel this in your right-side pectoral muscles.",
            "As your mobility increases, you'll be able to stretch further and roll your body further.",
            "Repeat on the other side.",
            "Knee to Chest Stretch",
            "Lie on your back with both legs extended.",
            "Pull your right knee into your chest, while keeping the left leg straight and your lower back pressed into the floor.",
            "Hold for 30 seconds to 2 minutes.",
            "Repeat on the other leg.",
            "Lying Quad Stretch",
            "Lie on one side.",
            "Keep your bottom leg straight and bend your top knee so your foot is by your butt.",
            "Hold your top foot with your hand, pulling it toward your butt.",
            "Keep your hips stable so you're not rocking back as you pull.",
            "Hold for 30 seconds to 2 minutes.",
            "Switch sides and repeat.",
            "Pretzel Stretch",
            "Lie on your left side with your head resting on your arm.",
            "Bend your right knee and hip up toward your chest as far as you can, and let it drop to the floor.",
            "Bend your left knee and grab your left foot (use a strap if you can’t reach it) with your right hand.",
            "Make sure your leg and torso remain in a straight line as you gently bring your top shoulder blade toward the floor.",
            "For more of a spinal twist, turn your head to look over your right shoulder.",
            "Standing Quad Stretch",
            "Stand with your feet together.",
            "Bend your left knee and use your left hand to pull your left foot toward your butt. Keep your knees together.",
            "If you need to, put one hand on a wall for balance.",
            "Squeeze your glutes to increase the stretch in the front of your legs.",
            "Hold for 30 seconds to 2 minutes.",
            "Repeat on the other leg."
        ]
    },
    {
        "type": "Outdoor Workout",
        "name": "Trail Hike",
        "exercise": [
                    "2 Miles",
                    "3 Miles",
                    "4 Miles",
                    "5 Miles",
                    "6 Miles"
                    ]
    },
    {
        "type": "Outdoor Workout",
        "name": "Run",
        "exercise": [
                 "2 Miles",
                 "3 Miles",
                 "4 Miles"
        ]
    },
    {
        "type": "Outdoor Workout",
        "name": "Swim",
        "exercise": [
            "400 Meters",
            "800 Meters",
            "1200 Meters",
            "1600 Meters",
            "2000 Meters"
        ] 
    }
];

db.Workout
    .remove({})
    .then(() => db.Workout.collection.insertMany(workOutSeed))
    .then(data => {
        console.log(data.result.n + " workouts inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
