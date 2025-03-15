const products = [
        // Handgun 
        {
            id: 1,
            name: "Glock 19",
            price: 499.99,
            category: "handgun",
            image: "glock_19.jpg",
            description: "The Glock 19 is a compact, reliable handgun known for its versatility.",
        },
        {
            id:101,
            name: "9mm Luger",
            price: 19.99,
            category: "handgun",
            image: "9mm_luger_ammo.jpg",
            description: "9mm Luger ammunition for Glock 19."
        },
        {
            id:102,
            name: "9mm +P",
            price: 22.99,
            category: "handgun",
            image: "9mm_p_ammo.jpg",
            description: "High-pressure 9mm ammunition for enhanced performance."
        },

        {
            id: 2,
            name: "Smith & Wesson M&P Shield",
            price: 399.99,
            category: "handgun",
            image: "sw_mp_shield.jpg",
            description: "A slim, lightweight handgun perfect for concealed carry."
        },
        {
            id:201,
            name: "9mm Luger",
            price: 19.99,
            category: "handgun",
            image: "9mm_luger_ammo.jpg",
            description: "9mm Luger ammunition for M&P Shield."
        },
        {
            id:202,
            name: ".40 S&W",
            price: 24.99,
            category: "handgun",
            image: "40_s_w_ammo.jpg",
            description: ".40 S&W ammunition for M&P Shield."
        },

        
        {
            id: 3,
            name: "Sig Sauer P320",
            price: 599.99,
            category: "handgun",
            image: "sig_p320.jpg",
            description: "The P320 is a modular handgun with a smooth trigger pull."
        },
        {
            id:301,
            name: "9mm Luger",
            price: 19.99,
            category: "handgun",
            image: "9mm_luger_ammo.jpg",
            description: "9mm Luger ammunition for Sig P320."
        },
        {
            id:302,
            name: ".40 S&W",
            price: 24.99,
            category: "handgun",
            image: "40_s_w_ammo.jpg",
            description: ".40 S&W ammunition for Sig P320."
        },

        {
            id: 4,
            name: "Springfield XD-S",
            price: 449.99,
            category: "handgun",
            image: "springfield_xds.jpg",
            description: "A compact and powerful handgun designed for personal defense."
        },
        {
            id: 401,
            name: "9mm Luger",
            price: 19.99,
            category: "handgun",
            image: "9mm_luger_ammo.jpg",
            description: "9mm Luger ammunition for XD-S."
        },
        {
            id: 402,
            name: "Springfield XD-S",
            price: 29.99,
            category: "handgun",
            image: "45_acp_ammo.jpg",
            description: ".45 ACP ammunition for XD-S."
        },
    
        // Rifle 
        {
            id: 5,
            name: "AR-15",
            price: 799.99,
            category: "rifle",
            image: "ar15.jpg",
            description: "The AR-15 is a lightweight, air-cooled, gas-operated rifle."
        },
        {
            id: 501,
            name: ".223 Remington",
            price: 29.99,
            category: "rifle",
            image: "223_remington_ammo.jpg",
            description: ".223 Remington ammunition for AR-15."
        },
        {
            id: 502,
            name: "5.56 NATO",
            price: 34.99,
            category: "rifle",
            image: "556_nato_ammo.jpg",
            description: "5.56 NATO ammunition for AR-15."
        },

        {
            id: 6,
            name: "308 Winchester Rifle",
            price: 899.99,
            category: "rifle",
            image: "308_rifle.jpg",
            description: "A versatile rifle suitable for hunting and long-range shooting."
        },
        {
            id: 601,
            name: ".308 Winchester",
            price: 39.99,
            category: "rifle",
            image: "308_ammo.jpg",
            description: ".308 Winchester ammunition for hunting."
        },
        {
            id: 602,
            name: "7.62 NATO",
            price: 34.99,
            category: "rifle",
            image: "762_nato_ammo.jpg",
            description: "7.62 NATO ammunition for precision shooting."
        },

        {
            id: 7,
            name: "Remington 700",
            price: 749.99,
            category: "rifle",
            image: "remington_700.jpg",
            description: "A bolt-action rifle known for its accuracy and reliability."
        },
        {
            id: 701,
            name: ".308 Winchester",
            price: 39.99,
            category: "rifle",
            image: "308_Winchester.jpg",
            description: "308 Winchester ammunition for Remington 700." 
        },
        {
            id: 702,
            name: ".30-06 Springfield",
            price: 34.99,
            category: "rifle",
            image:"30-06_springfield.jpg",
            description:"30-06 Springfield ammunition for Remington 700."
        },

        {
            id: 8,
            name: "M1 Garand",
            price: 1199.99,
            category: "rifle",
            image: "m1_garand.jpg",
            description: "The M1 Garand is a semi-automatic rifle used in World War II."
        },
        {
            id: 801,
            name:".30.06 Springfield",
            price: 34.99,
            category:"rifle",
            image: "30.06_springfield.jpg",
            description:"30-06 Springfield ammunition for M1 Garand."
        },

        // Shotgun 
        {
            id: 9,
            name: "Remington 870",
            price: 399.99,
            category: "shotgun",
            image: "remington_870.jpg",
            description: "A pump-action shotgun known for its reliability and versatility."
        },
        {   id: 901, 
            name: "12 Gauge Birdshot", 
            price: 14.99, 
            category: "shotgun",
            image: "12_Gauge_Birdshot.jpg",
            description: "12 Gauge birdshot for Remington 870." 
        },
        {   id: 902, 
            name: "12 Gauge Buckshot", 
            price: 19.99, 
            category: "shotgun",
            image: "12_Gauge_Buckshot.jpg",
            description: "12 Gauge buckshot for Remington 870." },

        {
            id: 10,
            name: "Mossberg 500",
            price: 349.99,
            category: "shotgun",
            image: "mossberg_500.jpg",
            description: "A popular pump-action shotgun used for hunting and home defense."
        },
        {   
            id: 1001,
            name: "12 Gauge Birdshot", 
            price: 14.99,
            category:"shotgun",
            image: "12_Gauge_Birdshot.jpg",
            description: "12 Gauge birdshot for Mossberg 500."
        },
        { 
            id: 1002, 
            name: "12 Gauge Buckshot", 
            price: 19.99, 
            category:"shotgun",
            image: "12_Gauge_Buckshot.jpg",
            description: "12 Gauge buckshot for Mossberg 500."
        },

        {
            id: 11,
            name: "Benelli M4",
            price: 1299.99,
            category: "shotgun",
            image: "benelli_m4.jpg",
            description: "A semi-automatic shotgun known for its performance and durability."
        },
        { 
            id: 1101, 
            name: "12 Gauge Birdshot", 
            price: 14.99,
            category: "shotgun",
            image: "12_Gauge_Birdshot.jpg",
            description: "12 Gauge birdshot for Benelli M4."
        },
        { 
            id: 1102,
            name: "12 Gauge Buckshot", 
            price: 19.99, 
            category: "shotgun",
            image: "12_Gauge_Buckshot.jpg",
            description: "12 Gauge buckshot for Benelli M4."
        },

        {
            id: 12,
            name: "Winchester SXP",
            price: 299.99,
            category: "shotgun",
            image: "winchester_sxp.jpg",
            description: "A reliable pump-action shotgun with a smooth action."
        },
        { 
            id: 1201, 
            name: "12 Gauge Birdshot", 
            price: 14.99,  
            category: "shotgun",
            image: "12_Gauge_Birdshot.jpg",
            description: "12 Gauge birdshot for Winchester SXP."
        },
        { 
            id: 1202, 
            name: "12 Gauge Buckshot", 
            price: 19.99,  
            category: "shotgun",
            image: "12_Gauge_Buckshot.jpg",
            description: "12 Gauge buckshot for Winchester SXP." 
        },
    
        // Specialty 
        {
            id: 13,
            name: "Tactical AR-10",
            price: 1199.99,
            category: "specialty",
            image: "tactical_ar10.jpg",
            description: "A tactical rifle designed for precision shooting."
        },
        { 
            id: 1301, 
            name: ".308 Winchester", 
            price: 39.99, 
            category: "specialty",
            image: "308_winchester.jpg",
            description: ".308 Winchester ammunition for Tactical AR-10." 
        },

        {
            id: 14,
            name: "Lever-Action Rifle",
            price: 599.99,
            category: "specialty",
            image: "lever_action_rifle.jpg",
            description: "A classic lever-action rifle for hunting and sport shooting."
        },
        { 
            id: 1401, 
            name: ".30-30 Winchester", 
            price: 29.99, 
            category: "specialty",
            description: ".30-30 Winchester ammunition for Lever-Action Rifle.", 
            image: "30-30_winchester.jpg" 
        },

        {
            id: 15,
            name: "Bullpup Rifle",
            price: 1099.99,
            category: "specialty",
            image: "bullpup_rifle.jpg",
            description: "A compact rifle design with the action and magazine behind the trigger."
        },
        { 
            id: 1501, 
            name: "5.56 NATO", 
            price: 34.99, 
            category: "specialty",
            description: "5.56 NATO ammunition for Bullpup Rifle.", 
            image: "556_nato.jpg" 
        },
        
        {
            id: 16,
            name: "Precision Sniper Rifle",
            price: 2499.99,
            category: "specialty",
            image: "precision_sniper_rifle.jpg",
            description: "A high-precision rifle designed for long-range shooting."
        },
        { 
            id: 1601, 
            name: ".338 Lapua Magnum", 
            price: 49.99, 
            category: "specialty",
            description: ".338 Lapua Magnum ammunition for Precision Sniper Rifle.", 
            image: "338_lapua_magnum.jpg" 
        },

        //Revolver

        {
            id: 17,
            name: "Smith & Wesson Model 686",
            price: 699.99,
            category: "revolver",
            image: "sw_model_686.jpg",
            description: "A robust revolver known for its accuracy and reliability."
        },
        { 
            id: 1701, 
            name: ".357 Magnum", 
            price: 34.99, 
            category: "revolver",
            description: ".357 Magnum ammunition for Model 686.", 
            image: "357_magnum.jpg" 
        },
        { 
            id: 1702, 
            name: ".38 Special", 
            price: 24.99, 
            category: "revolver",
            description: ".38 Special ammunition for Model 686.", 
            image: "38_special.jpg" 
        },

        {
            id: 18,
            name: "Colt Python",
            price: 1199.99,
            category: "revolver",
            image: "colt_python.jpg",
            description: "The Colt Python is a legendary revolver with a smooth trigger."
        },
        { 
            id: 1801, 
            name: ".357 Magnum", 
            price: 34.99, 
            category: "revolver",
            description: ".357 Magnum ammunition for Colt Python.", 
            image: "357_magnum.jpg" 
        },

        {
            id: 19,
            name: "Ruger GP100",
            price: 649.99,
            category: "revolver",
            image: "ruger_gp100.jpg",
            description: "A versatile revolver suitable for target shooting and self-defense."
        },
        { 
            id: 1901, 
            name: ".357 Magnum", 
            price: 34.99, 
            category: "revolver",
            description: ".357 Magnum ammunition for GP100.", 
            image: "357_magnum.jpg" 
        },
        { 
            id: 1902, 
            name: ".38 Special", 
            price: 24.99, 
            category: "revolver",
            description: ".38 Special ammunition for GP100.", 
            image: "38_special.jpg" 
        },

        // Tactical 
        {
            id: 20,
            name: "Tactical Shotgun",
            price: 799.99,
            category: "tactical",
            image: "tactical_shotgun.jpg",
            description: "A tactical shotgun designed for home defense and law enforcement."
        },
            {
                id: 2001,
                name: "12 Gauge Birdshot", 
                price: 14.99, 
                category: "tactical",
                description: "12 Gauge birdshot for Tactical Shotgun.", 
                image: "12g_birdshot.jpg" },
            { 
                id: 2002, name: "12 Gauge Buckshot", price: 19.99, 
                category: "tactical",
                description: "12 Gauge buckshot for Tactical Shotgun.", image: "12g_buckshot.jpg" },
        {
            id: 21,
            name: "AR-10",
            price: 1299.99,
            category: "tactical",
            image: "ar10.jpg",
            description: "A powerful rifle designed for long-range precision shooting."
        },
            { id: 2101, name: ".308 Winchester", price: 39.99,  category: "tactical",
                description: ".308 Winchester ammunition for AR-10.", image: "308_winchester.jpg" },
        

        {
            id: 22,
            name: "Submachine Gun",
            price: 1499.99,
            category: "tactical",
            image: "submachine_gun.jpg",
            description: "A compact automatic firearm designed for close-quarters combat."
        },
        
            { id: 2201, name: "9mm Luger", price: 19.99, 
                category: "tactical",
                description: "9mm Luger ammunition for Submachine Gun.", image: "9mm_luger.jpg" },
        
        // Training 
        {
            id: 23,
            name: "Training Handgun",
            price: 299.99,
            category: "training",
            image: "training_handgun.jpg",
            description: "An affordable handgun designed for training and practice."
        },

            { id: 2301, name: "9mm Luger", price: 19.99, 
                category: "training",
                description: "9mm Luger ammunition for Training Handgun.", image: "9mm_luger.jpg" },
        
        {
            id: 24,
            name: "Training Rifle",
            price: 399.99,
            category: "training",
            image: "training_rifle.jpg",
            description: "A cost-effective rifle for training and skill development."
        },
            { id: 2401, name: ".22 LR", price: 5.99, 
                category: "training",
                description: ".22 LR ammunition for Training Rifle.", image: "22lr.jpg" },


        {
            id: 25,
            name: "Training Shotgun",
            price: 249.99,
            category: "training",
            image: "training_shotgun.jpg",
            description: "A reliable shotgun designed for training purposes."
        },
    
            { id: 2501, name: "12 Gauge Birdshot", price: 14.99,
                category: "training", 
                description: "12 Gauge birdshot for Training Shotgun.", image: "12g_birdshot.jpg" },
    
];

export default products;
