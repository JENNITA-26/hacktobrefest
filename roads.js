/**
 * roads.js
 * AEGIS // Offline Emergency Safe-Router - Spatial Graph Schema
 * 8 Local Municipal Nodes and Fixed Traversal Cost Array (100% Zero-WAN)
 * Matches Live Demonstration Protocol:
 * - Baseline (HQ -> North Bridge -> Shelter A): 18 km
 * - Hazard Injection (HQ -> South Causeway -> Shelter A): 21 km
 */

export const MUNICIPAL_NODES = [
    {
        id: 'node_hq',
        name: 'Emergency HQ',
        shortLabel: 'HQ',
        type: 'command',
        category: 'Command Center',
        x: 130,
        y: 300,
        description: 'Regional Emergency Operations Command Center',
        status: 'operational'
    },
    {
        id: 'node_hospital',
        name: 'Central Hospital',
        shortLabel: 'HOSP',
        type: 'medical',
        category: 'Trauma Center',
        x: 270,
        y: 130,
        description: 'Level-1 Emergency Trauma Hospital (Capacity: 350 beds)',
        status: 'operational',
        capacity: '310 / 350 (88% Full)'
    },
    {
        id: 'node_midtown',
        name: 'Midtown Junction',
        shortLabel: 'JCT',
        type: 'transit',
        category: 'Transit Hub',
        x: 380,
        y: 300,
        description: 'Central Metro Corridor Interchange',
        status: 'operational'
    },
    {
        id: 'node_fire',
        name: 'West Fire Station',
        shortLabel: 'FIRE',
        type: 'emergency',
        category: 'Rescue Depot',
        x: 270,
        y: 470,
        description: 'Heavy Rescue & Evacuation Vehicle Depot',
        status: 'operational'
    },
    {
        id: 'node_north_bridge',
        name: 'North Bridge',
        shortLabel: 'N-BRG',
        type: 'bridge',
        category: 'River Crossing',
        x: 620,
        y: 180,
        description: 'Primary 4-Lane River Span • Fast Corridor to East Shelter A',
        status: 'operational'
    },
    {
        id: 'node_south_causeway',
        name: 'South Causeway',
        shortLabel: 'S-CSW',
        type: 'bridge',
        category: 'River Crossing',
        x: 620,
        y: 430,
        description: 'Elevated Southern River Crossing • Auxiliary Bypass',
        status: 'operational'
    },
    {
        id: 'node_shelter_a',
        name: 'East Shelter A',
        shortLabel: 'SH-A',
        type: 'shelter',
        category: 'Primary Safe Haven',
        x: 880,
        y: 220,
        description: 'Civic Arena Complex (Capacity: 2,500 • Solar Microgrid Active)',
        status: 'operational',
        capacity: '1,850 / 2,500 (74% Full)',
        power: 'Microgrid Active',
        supplies: '14-Day Buffer'
    },
    {
        id: 'node_shelter_b',
        name: 'East Shelter B',
        shortLabel: 'SH-B',
        type: 'shelter',
        category: 'Highland Safe Haven',
        x: 880,
        y: 450,
        description: 'Highland Academy Haven (Capacity: 1,200 • Water Filtration Active)',
        status: 'operational',
        capacity: '720 / 1,200 (60% Full)',
        power: 'Auxiliary Generator Active',
        supplies: 'Pediatric & Medical Support'
    }
];

export const CORRIDORS = [
    // -------------------------------------------------------------------------
    // Primary Baseline Corridor: HQ -> Midtown (6 km) -> North Bridge (5 km) -> East Shelter A (7 km) = 18 km
    // -------------------------------------------------------------------------
    { id: 'corr_hq_midtown', u: 'node_hq', v: 'node_midtown', distanceKm: 6, name: 'Central Expressway Spine' },
    { id: 'corr_midtown_north_bridge', u: 'node_midtown', v: 'node_north_bridge', distanceKm: 5, name: 'North Bridge Approach' },
    { id: 'corr_north_bridge_shelter_a', u: 'node_north_bridge', v: 'node_shelter_a', distanceKm: 7, name: 'East Arena Parkway' },

    // -------------------------------------------------------------------------
    // Emergency Detour Corridor: Midtown -> South Causeway (7 km) -> East Shelter A (8 km) = 6 + 7 + 8 = 21 km
    // -------------------------------------------------------------------------
    { id: 'corr_midtown_south_causeway', u: 'node_midtown', v: 'node_south_causeway', distanceKm: 7, name: 'South Causeway Connector' },
    { id: 'corr_south_causeway_shelter_a', u: 'node_south_causeway', v: 'node_shelter_a', distanceKm: 8, name: 'Eastern Ring Bypass' },

    // -------------------------------------------------------------------------
    // Auxiliary Municipal Connections
    // -------------------------------------------------------------------------
    { id: 'corr_hq_hospital', u: 'node_hq', v: 'node_hospital', distanceKm: 6, name: 'Medical Access Blvd' },
    { id: 'corr_hospital_midtown', u: 'node_hospital', v: 'node_midtown', distanceKm: 5, name: 'Civic Connector' },
    { id: 'corr_hq_fire', u: 'node_hq', v: 'node_fire', distanceKm: 7, name: 'Emergency Vehicle Arterial' },
    { id: 'corr_fire_midtown', u: 'node_fire', v: 'node_midtown', distanceKm: 5, name: 'South Depot Way' },
    { id: 'corr_fire_south_causeway', u: 'node_fire', v: 'node_south_causeway', distanceKm: 7, name: 'Industrial South Route' },
    { id: 'corr_hospital_north_bridge', u: 'node_hospital', v: 'node_north_bridge', distanceKm: 8, name: 'Upper River Overpass' },
    { id: 'corr_south_causeway_shelter_b', u: 'node_south_causeway', v: 'node_shelter_b', distanceKm: 5, name: 'Highland Sanctuary Spur' },
    { id: 'corr_shelter_a_shelter_b', u: 'node_shelter_a', v: 'node_shelter_b', distanceKm: 6, name: 'Inter-Shelter Corridor' },
    { id: 'corr_north_south_patrol', u: 'node_north_bridge', v: 'node_south_causeway', distanceKm: 8, name: 'River Levee Patrol Road' }
];

export default {
    MUNICIPAL_NODES,
    CORRIDORS
};
