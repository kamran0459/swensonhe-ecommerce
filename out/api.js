YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "MachineController",
        "MachinesRequestValidator",
        "PodController",
        "PodsRequestValidator",
        "helper/Commons"
    ],
    "modules": [
        "MachineController",
        "PodController",
        "app.js",
        "database_DatabaseConnection",
        "helpers_Commons",
        "models_Flavor",
        "models_Machine",
        "models_Pod",
        "models_Size",
        "models_Type",
        "router",
        "seeds_MachinesSeeder",
        "seeds_PodsSeeder",
        "validations_MachinesRequestValidator",
        "validations_PodsRequestValidator"
    ],
    "allModules": [
        {
            "displayName": "app.js",
            "name": "app.js",
            "description": "this modules contains the the setter of express.js,\n  basic headers security and database connection initialization."
        },
        {
            "displayName": "database/DatabaseConnection",
            "name": "database_DatabaseConnection",
            "description": "Database Connection module."
        },
        {
            "displayName": "helpers/Commons",
            "name": "helpers_Commons",
            "description": "Commons Methods Module."
        },
        {
            "displayName": "MachineController",
            "name": "MachineController",
            "description": "this modules contains Machine routes handler methods."
        },
        {
            "displayName": "models/Flavor",
            "name": "models_Flavor",
            "description": "Flavor Schema Mongo Model."
        },
        {
            "displayName": "models/Machine",
            "name": "models_Machine",
            "description": "Machine Schema Mongo Model."
        },
        {
            "displayName": "models/Pod",
            "name": "models_Pod",
            "description": "Pod Schema Mongo Model."
        },
        {
            "displayName": "models/Size",
            "name": "models_Size",
            "description": "Size Schema Mongo Model."
        },
        {
            "displayName": "models/Type",
            "name": "models_Type",
            "description": "Type Schema Mongo Model."
        },
        {
            "displayName": "PodController",
            "name": "PodController",
            "description": "this modules contains Pods routes handler methods."
        },
        {
            "displayName": "router",
            "name": "router",
            "description": "Router Module."
        },
        {
            "displayName": "seeds/MachinesSeeder",
            "name": "seeds_MachinesSeeder",
            "description": "Machines Seeder module."
        },
        {
            "displayName": "seeds/PodsSeeder",
            "name": "seeds_PodsSeeder",
            "description": "Pods Seeder module."
        },
        {
            "displayName": "validations/MachinesRequestValidator",
            "name": "validations_MachinesRequestValidator",
            "description": "Machines Request Validator Methods Module."
        },
        {
            "displayName": "validations/PodsRequestValidator",
            "name": "validations_PodsRequestValidator",
            "description": "Pods Request Validator Methods Module."
        }
    ],
    "elements": []
} };
});