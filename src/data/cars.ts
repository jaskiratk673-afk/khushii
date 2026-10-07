export interface Car {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  priceFormatted: string;
  monthlyEstimate: string;
  bodyType: "Coupe" | "Sedan" | "SUV" | "Convertible" | "Supercar";
  fuelType: "Petrol" | "Electric" | "Hybrid" | "Diesel";
  transmission: "Automatic" | "Manual" | "Dual-Clutch PDK" | "Single-Speed";
  mileage: string;
  engine: string;
  power: string;
  torque: string;
  acceleration: string;
  topSpeed: string;
  drivetrain: string;
  exteriorColor: string;
  interiorColor: string;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  isFeatured?: boolean;
  status: "Available" | "Reserved" | "Special Order";
}

export const CARS_DATA: Car[] = [
  {
    id: "porsche-911-gt3-rs",
    name: "911 GT3 RS",
    brand: "Porsche",
    year: 2024,
    price: 241300,
    priceFormatted: "$241,300",
    monthlyEstimate: "$2,950/mo",
    bodyType: "Coupe",
    fuelType: "Petrol",
    transmission: "Dual-Clutch PDK",
    mileage: "420 miles",
    engine: "4.0L Naturally Aspirated Boxer-6",
    power: "518 hp",
    torque: "465 Nm",
    acceleration: "3.0s (0-60 mph)",
    topSpeed: "184 mph",
    drivetrain: "Rear-Wheel Drive (RWD)",
    exteriorColor: "Shark Blue with Pyro Red Accents",
    interiorColor: "Black Leather & Race-Tex with Guards Red Stitching",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1611821064430-094389148d2d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Engineered purely for track supremacy yet road-legal. The Porsche 911 GT3 RS features an active drag reduction DRS rear wing, bespoke aero underbody, and a high-revving 9,000 RPM naturally aspirated flat-six powerplant.",
    features: [
      "Weissach Package with Exposed Carbon Fiber",
      "Porsche Ceramic Composite Brakes (PCCB)",
      "Front Axle Hydraulic Lift System",
      "Active Aerodynamic DRS Rear Wing",
      "Full Bucket Race Seats in Carbon",
      "BOSE® Surround Sound System",
      "Chrono Package with Lap Trigger Preparation",
      "Forged Magnesium Lightweight Wheels",
    ],
    isFeatured: true,
    status: "Available",
  },
  {
    id: "mercedes-amg-gt-black-series",
    name: "AMG GT Black Series",
    brand: "Mercedes-Benz",
    year: 2024,
    price: 325000,
    priceFormatted: "$325,000",
    monthlyEstimate: "$3,800/mo",
    bodyType: "Coupe",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "780 miles",
    engine: "4.0L Bi-Turbo Flat-Plane V8",
    power: "720 hp",
    torque: "800 Nm",
    acceleration: "3.1s (0-60 mph)",
    topSpeed: "202 mph",
    drivetrain: "Rear-Wheel Drive (RWD)",
    exteriorColor: "Magmabeam Orange Metallic",
    interiorColor: "Exclusive Nappa Leather / DINAMICA",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "The pinnacle of AMG engineering. The Mercedes-AMG GT Black Series packs a motorsport flat-plane crank V8 that roars with unbridled aggression, paired with carbon aero scoops and two-stage adjustable rear wings.",
    features: [
      "Flat-Plane Crankshaft Motorsport Engine",
      "AMG Ceramic High-Performance Composite Braking",
      "Carbon Fiber Front Splitter & Hood",
      "9-Stage AMG Traction Control",
      "Burmester® High-End 3D Surround Sound",
      "Matte Carbon Fiber Interior Trim",
    ],
    isFeatured: true,
    status: "Available",
  },
  {
    id: "bmw-m8-competition-gran-coupe",
    name: "M8 Competition Gran Coupe",
    brand: "BMW",
    year: 2025,
    price: 138800,
    priceFormatted: "$138,800",
    monthlyEstimate: "$1,720/mo",
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "15 miles (Brand New)",
    engine: "4.4L BMW M TwinPower Turbo V8",
    power: "617 hp",
    torque: "750 Nm",
    acceleration: "3.0s (0-60 mph)",
    topSpeed: "190 mph",
    drivetrain: "M xDrive Intelligent AWD",
    exteriorColor: "Frozen Marina Bay Blue",
    interiorColor: "Midrand Beige Full Merino Leather",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Uncompromising four-door luxury combined with fierce racetrack DNA. The M8 Competition Gran Coupe effortlessly balances grand tourer poise with earth-shattering V8 acceleration and all-weather confidence.",
    features: [
      "M Carbon Ceramic Brakes",
      "Bowers & Wilkins Diamond Surround Sound",
      "M Driver's Package",
      "Carbon Fiber Roof & Exterior Accents",
      "Head-Up Display with M-Specific Views",
      "Ventilated & Massaging Active Sport Seats",
    ],
    isFeatured: true,
    status: "Available",
  },
  {
    id: "audi-rs-e-tron-gt",
    name: "RS e-tron GT",
    brand: "Audi",
    year: 2025,
    price: 147500,
    priceFormatted: "$147,500",
    monthlyEstimate: "$1,820/mo",
    bodyType: "Sedan",
    fuelType: "Electric",
    transmission: "Single-Speed",
    mileage: "35 miles (Brand New)",
    engine: "Dual Permanently Synchronous Electric Motors",
    power: "637 hp (Boost Mode)",
    torque: "830 Nm",
    acceleration: "3.1s (0-60 mph)",
    topSpeed: "155 mph",
    drivetrain: "quattro All-Wheel Drive",
    exteriorColor: "Kemora Gray Metallic",
    interiorColor: "Monaco Gray Fine Nappa Leather with Honeycomb Stitching",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "The futuristic expression of progressive electrification. The RS e-tron GT is a masterclass in aerodynamically sculpted body lines, rapid 800-volt fast-charging, and instant electric torque.",
    features: [
      "800-Volt Electric Architecture (5% to 80% in 22.5 mins)",
      "Three-Chamber Adaptive Air Suspension",
      "Tungsten Carbide-Coated Brakes",
      "Carbon Fiber Roof & Dynamic Aero Diffusers",
      "Bang & Olufsen 3D Premium Sound",
      "Matrix LED Headlights with Audi Laser Light",
    ],
    isFeatured: true,
    status: "Available",
  },
  {
    id: "aston-martin-db12",
    name: "DB12 Super Tourer",
    brand: "Aston Martin",
    year: 2024,
    price: 245000,
    priceFormatted: "$245,000",
    monthlyEstimate: "$3,050/mo",
    bodyType: "Coupe",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "620 miles",
    engine: "4.0L Hand-Built Twin-Turbo V8",
    power: "671 hp",
    torque: "800 Nm",
    acceleration: "3.5s (0-60 mph)",
    topSpeed: "202 mph",
    drivetrain: "Rear-Wheel Drive (RWD)",
    exteriorColor: "Satin Aston Martin Racing Green",
    interiorColor: "Inspire Comfort Bridge of Weir Tan Leather",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Defining the next era of Super Tourers. Handcrafted in Gaydon, UK, the DB12 features an entirely redesigned cockpit, bespoke Bowers & Wilkins acoustics, and intoxicating twin-turbo power delivery.",
    features: [
      "Bowers & Wilkins 1,170-Watt Surround Audio",
      "New Generation Bespoke Touchscreen Infotainment",
      "Electronic Rear Differential (E-Diff)",
      "Michelin Pilot Sport 5S Noise-Cancelling Tyres",
      "Hand-Finished Semi-Aniline Leather",
      "Carbon Ceramic Braking System",
    ],
    isFeatured: true,
    status: "Available",
  },
  {
    id: "ferrari-296-gtb",
    name: "296 GTB Hybrid",
    brand: "Ferrari",
    year: 2024,
    price: 342000,
    priceFormatted: "$342,000",
    monthlyEstimate: "$4,200/mo",
    bodyType: "Supercar",
    fuelType: "Hybrid",
    transmission: "Dual-Clutch PDK",
    mileage: "310 miles",
    engine: "3.0L 120° V6 Twin-Turbo + Electric Motor",
    power: "819 hp",
    torque: "740 Nm",
    acceleration: "2.7s (0-60 mph)",
    topSpeed: "205 mph",
    drivetrain: "Rear-Wheel Drive (RWD)",
    exteriorColor: "Rosso Corsa with Silver Livery",
    interiorColor: "Nero Leather with Alcantara Daytona Racing Seats",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "A revolutionary hybrid Berlinetta straight from Maranello. Combining an agile 120-degree turbo V6 with a race-derived electric motor for exhilarating throttle response and pure zero-emission city cruising.",
    features: [
      "Assetto Fiorano Lightweight Performance Pack",
      "Brembo Carbon Ceramic Brake Calipers",
      "Active Rear Spoiler Generating 360kg Downforce",
      "eManettino Hybrid Drive Mode Selectors",
      "Titanium Exhaust System",
      "Digital Cockpit with Passenger Display",
    ],
    isFeatured: true,
    status: "Available",
  },
  {
    id: "range-rover-sv-autobiography",
    name: "Range Rover SV",
    brand: "Land Rover",
    year: 2025,
    price: 218500,
    priceFormatted: "$218,500",
    monthlyEstimate: "$2,690/mo",
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "10 miles (Brand New)",
    engine: "4.4L Twin-Turbocharged V8",
    power: "606 hp",
    torque: "750 Nm",
    acceleration: "4.3s (0-60 mph)",
    topSpeed: "162 mph",
    drivetrain: "All-Wheel Drive (AWD)",
    exteriorColor: "Santorini Black with SV Serenity Accents",
    interiorColor: "Perlino Semi-Aniline Leather with Caraway Contrast",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1541348263662-e0c826619fe2?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "The undisputed crown jewel of luxury SUVs. The Range Rover SV represents personalized bespoke craftsmanship, whisper-quiet active noise cancellation, and effortless all-terrain supremacy.",
    features: [
      "SV Signature Suite 4-Seat Executive Lounge",
      "Meridian™ Signature 35-Speaker Sound System",
      "Electrically Deployable Club Table & Refrigerator",
      "Electronic Air Suspension with Dynamic Response Pro",
      "All-Wheel Steering for City Maneuverability",
      "Natural Cream Ash Burr Wood Marquetry",
    ],
    isFeatured: false,
    status: "Available",
  },
  {
    id: "bentley-continental-gt-speed",
    name: "Continental GT Speed",
    brand: "Bentley",
    year: 2024,
    price: 298000,
    priceFormatted: "$298,000",
    monthlyEstimate: "$3,600/mo",
    bodyType: "Coupe",
    fuelType: "Petrol",
    transmission: "Dual-Clutch PDK",
    mileage: "950 miles",
    engine: "6.0L Twin-Turbo W12",
    power: "650 hp",
    torque: "900 Nm",
    acceleration: "3.5s (0-60 mph)",
    topSpeed: "208 mph",
    drivetrain: "Active All-Wheel Drive",
    exteriorColor: "Anthracite Metallic",
    interiorColor: "Beluga Leather with Diamond-in-Diamond Quilting",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Handcrafted luxury meets colossal grand-touring capability. Fitted with the legendary Bentley 6.0L W12, carbon-ceramic brakes, and electronic all-wheel steering for effortless continental cross-country jaunts.",
    features: [
      "Bentley Rotating Dashboard Display",
      "Naim for Bentley 2,200W Premium Audio",
      "Electronic All-Wheel Steering & Torque Vectoring",
      "48V Active Anti-Roll Suspension Stabilization",
      "Hand-Cross Stitched Diamond Quilting",
      "Mulliner Blackline Exterior Styling",
    ],
    isFeatured: false,
    status: "Available",
  },
  {
    id: "porsche-taycan-turbo-s",
    name: "Taycan Turbo S",
    brand: "Porsche",
    year: 2025,
    price: 194900,
    priceFormatted: "$194,900",
    monthlyEstimate: "$2,400/mo",
    bodyType: "Sedan",
    fuelType: "Electric",
    transmission: "Automatic",
    mileage: "80 miles (Brand New)",
    engine: "Dual Permanent Magnet Synchronous Motors",
    power: "750 hp (Overboost)",
    torque: "1,050 Nm",
    acceleration: "2.6s (0-60 mph)",
    topSpeed: "161 mph",
    drivetrain: "All-Wheel Drive (AWD)",
    exteriorColor: "Carrara White Metallic",
    interiorColor: "Black/Slate Grey Two-Tone Leather",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "Electric propulsion in its most thrilling, precise Porsche form. The Taycan Turbo S delivers neck-snapping 2.6s launches over and over without heat fade, equipped with Porsche Active Ride suspension.",
    features: [
      "Porsche Active Ride Suspension System",
      "Porsche Ceramic Composite Brakes (PCCB)",
      "Rear-Axle Steering with Power Steering Plus",
      "Passenger Touchscreen Display",
      "320kW DC Ultra-Fast Charging Support",
      "Burmester® 3D High-End Sound System",
    ],
    isFeatured: false,
    status: "Available",
  },
  {
    id: "bmw-m4-csl",
    name: "M4 CSL Limited Edition",
    brand: "BMW",
    year: 2024,
    price: 140895,
    priceFormatted: "$140,895",
    monthlyEstimate: "$1,750/mo",
    bodyType: "Coupe",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "1,100 miles",
    engine: "3.0L M TwinPower Turbo Inline-6",
    power: "543 hp",
    torque: "650 Nm",
    acceleration: "3.6s (0-60 mph)",
    topSpeed: "191 mph",
    drivetrain: "Rear-Wheel Drive (RWD)",
    exteriorColor: "Frozen Brooklyn Grey Metallic with Red Accents",
    interiorColor: "M Carbon Full Bucket Race Seats",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "A tribute to 50 years of BMW M. Strictly limited to 1,000 units worldwide, the M4 CSL shreds weight with carbon fiber throughout, deletes the rear seats, and achieves razor-sharp Nürburgring precision.",
    features: [
      "1 of 1,000 Units Worldwide",
      "BMW Laserlights with Yellow Racing Daytime Signatures",
      "Carbon Fiber Ducktail Integrated Boot Lid",
      "Titanium Lightweight Rear Silencer Exhaust",
      "M Carbon Ceramic Brakes with Red Calipers",
      "Track-Optimized Michelin Pilot Sport Cup 2R Tyres",
    ],
    isFeatured: false,
    status: "Reserved",
  },
  {
    id: "mercedes-maybach-s680",
    name: "Maybach S 680 V12",
    brand: "Mercedes-Benz",
    year: 2025,
    price: 234300,
    priceFormatted: "$234,300",
    monthlyEstimate: "$2,890/mo",
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "25 miles (Brand New)",
    engine: "6.0L Handcrafted Bi-Turbo V12",
    power: "621 hp",
    torque: "900 Nm",
    acceleration: "4.4s (0-60 mph)",
    topSpeed: "155 mph",
    drivetrain: "4MATIC All-Wheel Drive",
    exteriorColor: "Obsidian Black / Kalahari Gold Two-Tone",
    interiorColor: "Exclusive MANUFAKTUR Crystal White / Silver Grey Pearl",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "The pinnacle of automotive stateliness. Powered by an imperious handcrafted twin-turbo V12, the Mercedes-Maybach S 680 provides unprecedented first-class comfort, silver champagne flutes, and electric gesture doors.",
    features: [
      "Handcrafted V12 Twin-Turbo Engine",
      "Burmester High-End 4D Surround Sound with Headrest Speakers",
      "Executive Rear Seats with Calf Massage & Footrest",
      "Refrigerated Rear Compartment with Champagne Flutes",
      "Electrically Operated Comfort Rear Doors",
      "Active Road Noise Compensation & Dual-Glazed Acoustic Glass",
    ],
    isFeatured: false,
    status: "Available",
  },
  {
    id: "audi-r8-v10-performance",
    name: "R8 V10 Performance",
    brand: "Audi",
    year: 2024,
    price: 212900,
    priceFormatted: "$212,900",
    monthlyEstimate: "$2,640/mo",
    bodyType: "Supercar",
    fuelType: "Petrol",
    transmission: "Dual-Clutch PDK",
    mileage: "890 miles",
    engine: "5.2L Naturally Aspirated FSI V10",
    power: "602 hp",
    torque: "560 Nm",
    acceleration: "3.1s (0-60 mph)",
    topSpeed: "205 mph",
    drivetrain: "quattro All-Wheel Drive",
    exteriorColor: "Suzuka Gray Metallic with Carbon Sideblades",
    interiorColor: "Express Red Fine Nappa Leather",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80",
    ],
    description:
      "The swan song of naturally aspirated supercar icons. Born on the racetrack with over 50% parts shared with the R8 LMS GT3 race car, featuring high-rpm acoustic euphoria and instantaneous steering response.",
    features: [
      "High-Revving 5.2L Naturally Aspirated V10 Engine",
      "Audi Ceramic Brakes with Anthracite Calipers",
      "Gloss Carbon Sigma Exterior Sideblades & Fixed Wing",
      "Audi Sport Sport Exhaust with Black Tips",
      "Bang & Olufsen Sound System with In-Seat Speakers",
      "Carbon Fiber Monocoque Subframe Construction",
    ],
    isFeatured: false,
    status: "Special Order",
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  perks: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "test-drives",
    title: "VIP Private Test Drives",
    subtitle: "At Showroom or Your Residence",
    description:
      "Experience the pinnacle of automotive engineering with dedicated track-ready routes or complimentary white-glove doorstep delivery of your chosen vehicle for a private trial.",
    icon: "SteeringWheel",
    perks: [
      "Accompanied by certified automotive product specialists",
      "Doorstep delivery within a 60-mile radius",
      "Dedicated highway and curved dynamic route options",
      "Complete vehicle technology and telemetry briefing",
    ],
  },
  {
    id: "financing",
    title: "Tailored Financing & Leasing",
    subtitle: "Bespoke Wealth Management Solutions",
    description:
      "Our premier financial consultants construct customized lease structures, balloon payments, and low-interest loan packages through tier-one global financial institutions.",
    icon: "BadgeDollarSign",
    perks: [
      "Competitive luxury vehicle interest rates from 3.9% APR",
      "Flexible lease horizons (12, 24, 36, 48 months)",
      "Zero-penalty early settlement options",
      "Discreet, rapid pre-qualification in under 2 hours",
    ],
  },
  {
    id: "insurance",
    title: "Premium Vehicle Insurance",
    subtitle: "Agreed-Value Comprehensive Coverage",
    description:
      "Protect your investment with customized luxury and exotic car insurance underwriting, offering guaranteed agreed value, OEM replacement parts, and global transport coverage.",
    icon: "ShieldCheck",
    perks: [
      "Guaranteed agreed value without depreciation clawback",
      "Exclusive OEM factory replacement parts guarantee",
      "Worldwide track day and concourse event coverage",
      "24/7 dedicated personal claims concierge manager",
    ],
  },
  {
    id: "servicing",
    title: "Certified Master Servicing",
    subtitle: "Factory-Trained Diagnostic Excellence",
    description:
      "Maintain peak performance and retain provenance with state-of-the-art diagnostic bays, genuine OEM components, and factory-certified master technicians.",
    icon: "Wrench",
    perks: [
      "Official factory diagnostic telemetry tools",
      "Climate-controlled secure staging bays",
      "Complimentary enclosed transporter pickup & return",
      "Full digital service record provenance logging",
    ],
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  carPurchased: string;
  rating: number;
  quote: string;
  date: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Alexander Sterling",
    role: "Private Equity Partner",
    location: "Beverly Hills, CA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    carPurchased: "Porsche 911 GT3 RS",
    rating: 5,
    quote:
      "The vehicle acquisition experience at Apex Motors redefined luxury for me. From the private track test drive to white-glove enclosed trailer delivery to my residence, every single detail was executed with Swiss precision.",
    date: "February 2026",
  },
  {
    id: "t2",
    name: "Dr. Elena Rostova",
    role: "Neurosurgeon & Collector",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    carPurchased: "Aston Martin DB12 Super Tourer",
    rating: 5,
    quote:
      "Transparent pricing, incredible vehicle provenance documentation, and zero sales pressure. Their bespoke financing team negotiated terms that seamlessly complemented my portfolio.",
    date: "January 2026",
  },
  {
    id: "t3",
    name: "Marcus Vance",
    role: "Tech Entrepreneur",
    location: "Seattle, WA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    carPurchased: "Audi RS e-tron GT",
    rating: 5,
    quote:
      "Finding an immaculate, high-spec RS e-tron GT was impossible until I engaged Apex Motors. They sourced and delivered the exact exterior colorway within 72 hours. Unrivaled hospitality.",
    date: "March 2026",
  },
];

export const SHOWROOM_STATS = [
  { label: "Vehicles Delivered", value: "2,400+", change: "+18% YoY" },
  { label: "Client Satisfaction", value: "99.8%", change: "Verified 5-Star" },
  { label: "Years of Prestige", value: "18+", change: "Established 2008" },
  { label: "Point Inspection", value: "150-Pt", change: "Factory Certified" },
];

export const SHOWROOM_INFO = {
  name: "Apex Motors",
  tagline: "The Pinnacle of Automotive Prestige",
  address: "742 Prestige Boulevard, Beverly Hills, CA 90210",
  phone: "+1 (800) 555-2739",
  email: "concierge@apexmotors.com",
  hours: [
    { days: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
    { days: "Saturday", time: "10:00 AM - 7:00 PM" },
    { days: "Sunday", time: "11:00 AM - 5:00 PM (By VIP Appointment)" },
  ],
};
