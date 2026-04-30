import List "mo:core/List";
import Array "mo:core/Array";
import Set "mo:core/Set";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Types "../types/common";

module {
  public type CollegeStore = List.List<Types.CollegeRecord>;

  /// Initialize the store with seed data of 20 realistic Indian colleges
  public func initSeedData(store : CollegeStore) {
    let seedData : [Types.CollegeRecord] = [
      {
        id = "iit-bombay";
        name = "IIT Bombay";
        location = "Mumbai";
        state = "Maharashtra";
        annualFees = 224000;
        placementPercent = 96;
        rating = 4.8;
        courses = [
          { name = "B.Tech Computer Science"; durationYears = 4; seats = 120 },
          { name = "B.Tech Electrical Engineering"; durationYears = 4; seats = 90 },
          { name = "B.Tech Mechanical Engineering"; durationYears = 4; seats = 80 },
          { name = "B.Tech Chemical Engineering"; durationYears = 4; seats = 70 },
        ];
        topRecruiters = ["Google", "Microsoft", "Goldman Sachs", "DE Shaw", "Uber"];
        avgPackageLPA = 22.5;
        establishedYear = 1958;
        totalStudents = 10000;
        accreditation = "NAAC A++ | NIRF Rank 3";
        description = "One of India's premier engineering institutes, renowned for cutting-edge research and exceptional placements. Located in the financial capital of India, IIT Bombay attracts top talent from across the country.";
        cutoffs = [
          { examType = "JEE Advanced"; rank = 67; category = "General" },
          { examType = "JEE Advanced"; rank = 890; category = "OBC" },
          { examType = "JEE Advanced"; rank = 1450; category = "SC" },
          { examType = "JEE Main"; rank = 250; category = "General" },
        ];
      },
      {
        id = "iit-delhi";
        name = "IIT Delhi";
        location = "New Delhi";
        state = "Delhi";
        annualFees = 219000;
        placementPercent = 95;
        rating = 4.8;
        courses = [
          { name = "B.Tech Computer Science"; durationYears = 4; seats = 112 },
          { name = "B.Tech Electrical Engineering"; durationYears = 4; seats = 85 },
          { name = "B.Tech Civil Engineering"; durationYears = 4; seats = 75 },
          { name = "B.Tech Biotechnology"; durationYears = 4; seats = 40 },
        ];
        topRecruiters = ["Google", "Amazon", "Adobe", "Qualcomm", "Samsung"];
        avgPackageLPA = 21.0;
        establishedYear = 1961;
        totalStudents = 8500;
        accreditation = "NAAC A++ | NIRF Rank 2";
        description = "India's top-ranked engineering institution by NIRF, IIT Delhi is known for its strong alumni network, world-class faculty, and exceptional placement record in both core and tech sectors.";
        cutoffs = [
          { examType = "JEE Advanced"; rank = 45; category = "General" },
          { examType = "JEE Advanced"; rank = 750; category = "OBC" },
          { examType = "JEE Advanced"; rank = 1200; category = "SC" },
          { examType = "JEE Main"; rank = 180; category = "General" },
        ];
      },
      {
        id = "iit-madras";
        name = "IIT Madras";
        location = "Chennai";
        state = "Tamil Nadu";
        annualFees = 215000;
        placementPercent = 94;
        rating = 4.9;
        courses = [
          { name = "B.Tech Computer Science"; durationYears = 4; seats = 100 },
          { name = "B.Tech Aerospace Engineering"; durationYears = 4; seats = 55 },
          { name = "B.Tech Mechanical Engineering"; durationYears = 4; seats = 90 },
          { name = "B.Tech Ocean Engineering"; durationYears = 4; seats = 30 },
        ];
        topRecruiters = ["Apple", "Amazon", "Intel", "Texas Instruments", "Flipkart"];
        avgPackageLPA = 23.0;
        establishedYear = 1959;
        totalStudents = 9000;
        accreditation = "NAAC A++ | NIRF Rank 1";
        description = "Ranked #1 by NIRF for 5 consecutive years, IIT Madras is recognized globally for research excellence in engineering and technology. The campus is located inside a forest reserve in Chennai.";
        cutoffs = [
          { examType = "JEE Advanced"; rank = 52; category = "General" },
          { examType = "JEE Advanced"; rank = 820; category = "OBC" },
          { examType = "JEE Advanced"; rank = 1380; category = "SC" },
          { examType = "JEE Main"; rank = 210; category = "General" },
        ];
      },
      {
        id = "iit-kanpur";
        name = "IIT Kanpur";
        location = "Kanpur";
        state = "Uttar Pradesh";
        annualFees = 212000;
        placementPercent = 92;
        rating = 4.7;
        courses = [
          { name = "B.Tech Computer Science"; durationYears = 4; seats = 100 },
          { name = "B.Tech Electrical Engineering"; durationYears = 4; seats = 90 },
          { name = "B.Tech Physics"; durationYears = 4; seats = 50 },
          { name = "B.Tech Mathematics & Scientific Computing"; durationYears = 4; seats = 40 },
        ];
        topRecruiters = ["Tower Research", "Goldman Sachs", "Microsoft", "Walmart Labs", "Cisco"];
        avgPackageLPA = 20.5;
        establishedYear = 1959;
        totalStudents = 8000;
        accreditation = "NAAC A | NIRF Rank 4";
        description = "Pioneer of computer science education in India, IIT Kanpur has a rich tradition of academic excellence and is especially well known for its research programs and entrepreneurship ecosystem.";
        cutoffs = [
          { examType = "JEE Advanced"; rank = 120; category = "General" },
          { examType = "JEE Advanced"; rank = 1100; category = "OBC" },
          { examType = "JEE Advanced"; rank = 1800; category = "SC" },
          { examType = "JEE Main"; rank = 450; category = "General" },
        ];
      },
      {
        id = "iit-kharagpur";
        name = "IIT Kharagpur";
        location = "Kharagpur";
        state = "West Bengal";
        annualFees = 208000;
        placementPercent = 91;
        rating = 4.7;
        courses = [
          { name = "B.Tech Computer Science"; durationYears = 4; seats = 110 },
          { name = "B.Tech Mining Engineering"; durationYears = 4; seats = 45 },
          { name = "B.Tech Agricultural Engineering"; durationYears = 4; seats = 35 },
          { name = "B.Tech Architecture"; durationYears = 5; seats = 40 },
        ];
        topRecruiters = ["Microsoft", "Google", "Infosys", "TCS", "McKinsey"];
        avgPackageLPA = 19.8;
        establishedYear = 1951;
        totalStudents = 12000;
        accreditation = "NAAC A | NIRF Rank 5";
        description = "The oldest and largest IIT in India, IIT Kharagpur has the most diverse range of programs including architecture, humanities, and management alongside engineering and science.";
        cutoffs = [
          { examType = "JEE Advanced"; rank = 160; category = "General" },
          { examType = "JEE Advanced"; rank = 1350; category = "OBC" },
          { examType = "JEE Advanced"; rank = 2100; category = "SC" },
          { examType = "JEE Main"; rank = 550; category = "General" },
        ];
      },
      {
        id = "bits-pilani";
        name = "BITS Pilani";
        location = "Pilani";
        state = "Rajasthan";
        annualFees = 520000;
        placementPercent = 90;
        rating = 4.6;
        courses = [
          { name = "B.E. Computer Science"; durationYears = 4; seats = 230 },
          { name = "B.E. Electronics & Communication"; durationYears = 4; seats = 200 },
          { name = "B.Pharm"; durationYears = 4; seats = 120 },
          { name = "M.Sc. Economics"; durationYears = 5; seats = 75 },
        ];
        topRecruiters = ["Qualcomm", "Samsung", "Microsoft", "Amazon", "Zomato"];
        avgPackageLPA = 17.5;
        establishedYear = 1964;
        totalStudents = 14000;
        accreditation = "NAAC A | NIRF Rank 25";
        description = "A private university with a unique BITS Admission Test (BITSAT) for admissions. BITS Pilani is known for its strong industry connections, dual-degree programs, and practice school internships.";
        cutoffs = [
          { examType = "BITSAT"; rank = 1200; category = "General" },
          { examType = "JEE Main"; rank = 1800; category = "General" },
          { examType = "JEE Main"; rank = 4500; category = "OBC" },
          { examType = "JEE Main"; rank = 8000; category = "SC" },
        ];
      },
      {
        id = "nit-trichy";
        name = "NIT Trichy";
        location = "Tiruchirappalli";
        state = "Tamil Nadu";
        annualFees = 156000;
        placementPercent = 88;
        rating = 4.5;
        courses = [
          { name = "B.Tech Computer Science"; durationYears = 4; seats = 90 },
          { name = "B.Tech Electronics & Communication"; durationYears = 4; seats = 80 },
          { name = "B.Tech Mechanical Engineering"; durationYears = 4; seats = 90 },
          { name = "B.Tech Chemical Engineering"; durationYears = 4; seats = 60 },
        ];
        topRecruiters = ["Cognizant", "Wipro", "TCS", "L&T", "Infosys"];
        avgPackageLPA = 11.2;
        establishedYear = 1964;
        totalStudents = 8000;
        accreditation = "NAAC A+ | NIRF Rank 9";
        description = "Consistently ranked among the top NITs, NIT Trichy is known for its strong academics, active student clubs, and outstanding placement record. A preferred destination for JEE aspirants after IITs.";
        cutoffs = [
          { examType = "JEE Main"; rank = 3200; category = "General" },
          { examType = "JEE Main"; rank = 8500; category = "OBC" },
          { examType = "JEE Main"; rank = 16000; category = "SC" },
        ];
      },
      {
        id = "nit-surathkal";
        name = "NIT Surathkal";
        location = "Mangalore";
        state = "Karnataka";
        annualFees = 148000;
        placementPercent = 85;
        rating = 4.4;
        courses = [
          { name = "B.Tech Computer Science"; durationYears = 4; seats = 85 },
          { name = "B.Tech Electrical Engineering"; durationYears = 4; seats = 75 },
          { name = "B.Tech Mining Engineering"; durationYears = 4; seats = 30 },
          { name = "B.Tech Information Technology"; durationYears = 4; seats = 60 },
        ];
        topRecruiters = ["Infosys", "Wipro", "Oracle", "ABB", "Bosch"];
        avgPackageLPA = 10.5;
        establishedYear = 1960;
        totalStudents = 6500;
        accreditation = "NAAC A | NIRF Rank 17";
        description = "Located on the picturesque Mangalore coast, NIT Surathkal (NITK) is known for its strong engineering programs and tech fest Incident. It has a strong alumni base in both India and Silicon Valley.";
        cutoffs = [
          { examType = "JEE Main"; rank = 4200; category = "General" },
          { examType = "JEE Main"; rank = 10000; category = "OBC" },
          { examType = "JEE Main"; rank = 18000; category = "SC" },
        ];
      },
      {
        id = "nit-warangal";
        name = "NIT Warangal";
        location = "Warangal";
        state = "Telangana";
        annualFees = 145000;
        placementPercent = 87;
        rating = 4.4;
        courses = [
          { name = "B.Tech Computer Science"; durationYears = 4; seats = 90 },
          { name = "B.Tech Electronics & Communication"; durationYears = 4; seats = 80 },
          { name = "B.Tech Civil Engineering"; durationYears = 4; seats = 70 },
          { name = "B.Tech Biotechnology"; durationYears = 4; seats = 40 },
        ];
        topRecruiters = ["TCS", "Wipro", "Accenture", "BHEL", "NTPC"];
        avgPackageLPA = 10.8;
        establishedYear = 1959;
        totalStudents = 7000;
        accreditation = "NAAC A | NIRF Rank 18";
        description = "One of the oldest NITs, NIT Warangal has a strong culture of academics and innovation. It hosts TECHNOZION, one of the largest national technical fests in South India.";
        cutoffs = [
          { examType = "JEE Main"; rank = 3800; category = "General" },
          { examType = "JEE Main"; rank = 9200; category = "OBC" },
          { examType = "JEE Main"; rank = 17500; category = "SC" },
        ];
      },
      {
        id = "iiit-hyderabad";
        name = "IIIT Hyderabad";
        location = "Hyderabad";
        state = "Telangana";
        annualFees = 340000;
        placementPercent = 93;
        rating = 4.6;
        courses = [
          { name = "B.Tech Computer Science"; durationYears = 4; seats = 250 },
          { name = "B.Tech Electronics & Communication"; durationYears = 4; seats = 100 },
          { name = "B.Tech Computational Linguistics"; durationYears = 4; seats = 30 },
        ];
        topRecruiters = ["Google", "Microsoft", "Amazon", "Flipkart", "Goldman Sachs"];
        avgPackageLPA = 18.0;
        establishedYear = 1998;
        totalStudents = 4500;
        accreditation = "NAAC A | NIRF Rank 32";
        description = "A research-focused institution specializing in Computer Science and related fields. IIIT Hyderabad is known for its research publications, startup ecosystem, and exceptional placements in product-based companies.";
        cutoffs = [
          { examType = "JEE Main"; rank = 5200; category = "General" },
          { examType = "JEE Main"; rank = 12000; category = "OBC" },
          { examType = "JEE Main"; rank = 22000; category = "SC" },
        ];
      },
      {
        id = "vit-vellore";
        name = "VIT Vellore";
        location = "Vellore";
        state = "Tamil Nadu";
        annualFees = 198000;
        placementPercent = 82;
        rating = 4.2;
        courses = [
          { name = "B.Tech Computer Science"; durationYears = 4; seats = 800 },
          { name = "B.Tech Mechanical Engineering"; durationYears = 4; seats = 500 },
          { name = "B.Tech Biomedical Engineering"; durationYears = 4; seats = 180 },
          { name = "B.Tech Information Technology"; durationYears = 4; seats = 400 },
        ];
        topRecruiters = ["TCS", "Wipro", "Accenture", "Infosys", "Amazon"];
        avgPackageLPA = 7.2;
        establishedYear = 1984;
        totalStudents = 40000;
        accreditation = "NAAC A++ | NIRF Rank 11";
        description = "One of India's largest private universities, VIT Vellore accepts students through VITEEE. Known for its industry partnerships, international collaborations, and strong placement support system.";
        cutoffs = [
          { examType = "VITEEE"; rank = 8000; category = "General" },
          { examType = "JEE Main"; rank = 60000; category = "General" },
          { examType = "JEE Main"; rank = 100000; category = "OBC" },
          { examType = "JEE Main"; rank = 150000; category = "SC" },
        ];
      },
      {
        id = "manipal-institute";
        name = "Manipal Institute of Technology";
        location = "Manipal";
        state = "Karnataka";
        annualFees = 275000;
        placementPercent = 80;
        rating = 4.1;
        courses = [
          { name = "B.Tech Computer Science"; durationYears = 4; seats = 600 },
          { name = "B.Tech Electrical Engineering"; durationYears = 4; seats = 300 },
          { name = "B.Tech Mechatronics"; durationYears = 4; seats = 120 },
          { name = "B.Tech Aeronautical Engineering"; durationYears = 4; seats = 100 },
        ];
        topRecruiters = ["Infosys", "Cognizant", "Dell", "Honeywell", "Shell"];
        avgPackageLPA = 6.8;
        establishedYear = 1957;
        totalStudents = 16000;
        accreditation = "NAAC A+ | NIRF Rank 50";
        description = "Part of the Manipal University ecosystem, MIT Manipal is a well-known private engineering college in Karnataka. It offers a vibrant campus life and good exposure to international programs.";
        cutoffs = [
          { examType = "MU OET"; rank = 15000; category = "General" },
          { examType = "JEE Main"; rank = 80000; category = "General" },
          { examType = "JEE Main"; rank = 120000; category = "OBC" },
        ];
      },
      {
        id = "jadavpur-university";
        name = "Jadavpur University";
        location = "Kolkata";
        state = "West Bengal";
        annualFees = 28000;
        placementPercent = 78;
        rating = 4.3;
        courses = [
          { name = "B.E. Computer Science"; durationYears = 4; seats = 80 },
          { name = "B.E. Electrical Engineering"; durationYears = 4; seats = 75 },
          { name = "B.E. Chemical Engineering"; durationYears = 4; seats = 60 },
          { name = "B.E. Civil Engineering"; durationYears = 4; seats = 80 },
        ];
        topRecruiters = ["TCS", "Wipro", "Cognizant", "Accenture", "L&T"];
        avgPackageLPA = 8.5;
        establishedYear = 1955;
        totalStudents = 12000;
        accreditation = "NAAC A | NIRF Rank 13";
        description = "A premier state university known for producing quality engineers at minimal cost. Jadavpur University has excellent research output and a strong tradition in humanities and arts alongside engineering.";
        cutoffs = [
          { examType = "WBJEE"; rank = 200; category = "General" },
          { examType = "JEE Main"; rank = 15000; category = "General" },
          { examType = "JEE Main"; rank = 35000; category = "OBC" },
        ];
      },
      {
        id = "dtu-delhi";
        name = "Delhi Technological University";
        location = "New Delhi";
        state = "Delhi";
        annualFees = 165000;
        placementPercent = 84;
        rating = 4.2;
        courses = [
          { name = "B.Tech Software Engineering"; durationYears = 4; seats = 90 },
          { name = "B.Tech Electronics & Communication"; durationYears = 4; seats = 120 },
          { name = "B.Tech Mechanical Engineering"; durationYears = 4; seats = 130 },
          { name = "B.Tech Environmental Engineering"; durationYears = 4; seats = 60 },
        ];
        topRecruiters = ["Amazon", "Microsoft", "Adobe", "Samsung", "Paytm"];
        avgPackageLPA = 12.5;
        establishedYear = 1941;
        totalStudents = 10000;
        accreditation = "NAAC A | NIRF Rank 36";
        description = "Formerly Delhi College of Engineering, DTU is one of India's top state technical universities. Its Delhi location gives students access to abundant internship and career opportunities.";
        cutoffs = [
          { examType = "JEE Main"; rank = 12000; category = "General" },
          { examType = "JEE Main"; rank = 28000; category = "OBC" },
          { examType = "JEE Main"; rank = 50000; category = "SC" },
        ];
      },
      {
        id = "psg-college";
        name = "PSG College of Technology";
        location = "Coimbatore";
        state = "Tamil Nadu";
        annualFees = 95000;
        placementPercent = 83;
        rating = 4.1;
        courses = [
          { name = "B.E. Computer Science"; durationYears = 4; seats = 120 },
          { name = "B.E. Mechanical Engineering"; durationYears = 4; seats = 120 },
          { name = "B.E. Electronics & Communication"; durationYears = 4; seats = 120 },
          { name = "B.Tech Information Technology"; durationYears = 4; seats = 90 },
        ];
        topRecruiters = ["CTS", "Infosys", "Robert Bosch", "Renault Nissan", "TVS Motors"];
        avgPackageLPA = 6.5;
        establishedYear = 1951;
        totalStudents = 8500;
        accreditation = "NAAC A+ | NIRF Rank 43";
        description = "One of the top private engineering colleges in Tamil Nadu, PSG College is known for its strong industry ties with Coimbatore's manufacturing sector and consistent placement record.";
        cutoffs = [
          { examType = "TNEA"; rank = 5000; category = "General" },
          { examType = "JEE Main"; rank = 90000; category = "General" },
        ];
      },
      {
        id = "thapar-institute";
        name = "Thapar Institute of Engineering & Technology";
        location = "Patiala";
        state = "Punjab";
        annualFees = 420000;
        placementPercent = 85;
        rating = 4.2;
        courses = [
          { name = "B.E. Computer Engineering"; durationYears = 4; seats = 420 },
          { name = "B.E. Electronics & Communication"; durationYears = 4; seats = 180 },
          { name = "B.E. Mechanical Engineering"; durationYears = 4; seats = 160 },
          { name = "B.E. Chemical Engineering"; durationYears = 4; seats = 80 },
        ];
        topRecruiters = ["Infosys", "Wipro", "Samsung", "HCL", "Capgemini"];
        avgPackageLPA = 9.5;
        establishedYear = 1956;
        totalStudents = 12000;
        accreditation = "NAAC A | NIRF Rank 27";
        description = "A deemed university in Punjab, Thapar is known for its research-driven curriculum and progressive admission process. It offers dual-degree programs and has a strong alumni presence in the IT industry.";
        cutoffs = [
          { examType = "JEE Main"; rank = 20000; category = "General" },
          { examType = "JEE Main"; rank = 45000; category = "OBC" },
          { examType = "JEE Main"; rank = 75000; category = "SC" },
        ];
      },
      {
        id = "amrita-vishwa";
        name = "Amrita Vishwa Vidyapeetham";
        location = "Coimbatore";
        state = "Tamil Nadu";
        annualFees = 185000;
        placementPercent = 79;
        rating = 4.0;
        courses = [
          { name = "B.Tech Computer Science"; durationYears = 4; seats = 480 },
          { name = "B.Tech Electrical Engineering"; durationYears = 4; seats = 180 },
          { name = "B.Tech Civil Engineering"; durationYears = 4; seats = 120 },
          { name = "B.Tech Cybersecurity"; durationYears = 4; seats = 90 },
        ];
        topRecruiters = ["TCS", "Infosys", "Wipro", "Accenture", "LTIMindtree"];
        avgPackageLPA = 6.2;
        establishedYear = 1994;
        totalStudents = 35000;
        accreditation = "NAAC A++ | NIRF Rank 6";
        description = "A multi-campus university with a strong focus on value-based education and research. Amrita's Coimbatore campus is the flagship and is especially known for its cybersecurity and computational intelligence research.";
        cutoffs = [
          { examType = "AEEE"; rank = 12000; category = "General" },
          { examType = "JEE Main"; rank = 70000; category = "General" },
        ];
      },
      {
        id = "bms-college";
        name = "BMS College of Engineering";
        location = "Bengaluru";
        state = "Karnataka";
        annualFees = 128000;
        placementPercent = 81;
        rating = 4.0;
        courses = [
          { name = "B.E. Computer Science"; durationYears = 4; seats = 180 },
          { name = "B.E. Electronics & Communication"; durationYears = 4; seats = 180 },
          { name = "B.E. Mechanical Engineering"; durationYears = 4; seats = 120 },
          { name = "B.E. Artificial Intelligence & ML"; durationYears = 4; seats = 60 },
        ];
        topRecruiters = ["Wipro", "Infosys", "Accenture", "IBM", "Mindtree"];
        avgPackageLPA = 7.8;
        establishedYear = 1946;
        totalStudents = 7500;
        accreditation = "NAAC A | NIRF Rank 68";
        description = "One of Bangalore's oldest and most reputed engineering colleges. BMS benefits greatly from its location in India's Silicon Valley, giving students unparalleled access to tech internships and jobs.";
        cutoffs = [
          { examType = "KCET"; rank = 3000; category = "General" },
          { examType = "JEE Main"; rank = 110000; category = "General" },
        ];
      },
      {
        id = "srm-institute";
        name = "SRM Institute of Science and Technology";
        location = "Chennai";
        state = "Tamil Nadu";
        annualFees = 240000;
        placementPercent = 78;
        rating = 3.9;
        courses = [
          { name = "B.Tech Computer Science"; durationYears = 4; seats = 1200 },
          { name = "B.Tech Mechanical Engineering"; durationYears = 4; seats = 600 },
          { name = "B.Tech Biotechnology"; durationYears = 4; seats = 240 },
          { name = "B.Tech AI & Data Science"; durationYears = 4; seats = 300 },
        ];
        topRecruiters = ["TCS", "Wipro", "CTS", "Dell", "Zoho"];
        avgPackageLPA = 5.8;
        establishedYear = 1985;
        totalStudents = 50000;
        accreditation = "NAAC A++ | NIRF Rank 30";
        description = "One of India's largest private universities, SRM offers over 200 programs across disciplines. It has a well-equipped campus in Kattankulathur and recently established multiple new campuses across India.";
        cutoffs = [
          { examType = "SRMJEEE"; rank = 20000; category = "General" },
          { examType = "JEE Main"; rank = 150000; category = "General" },
        ];
      },
      {
        id = "nitk-surathkal";
        name = "NITK Surathkal";
        location = "Surathkal";
        state = "Karnataka";
        annualFees = 152000;
        placementPercent = 86;
        rating = 4.4;
        courses = [
          { name = "B.Tech Computer Science"; durationYears = 4; seats = 80 },
          { name = "B.Tech Civil Engineering"; durationYears = 4; seats = 90 },
          { name = "B.Tech Chemical Engineering"; durationYears = 4; seats = 55 },
          { name = "B.Tech Metallurgical Engineering"; durationYears = 4; seats = 40 },
        ];
        topRecruiters = ["Oracle", "ABB", "Infosys", "Deloitte", "Shell"];
        avgPackageLPA = 11.0;
        establishedYear = 1960;
        totalStudents = 6000;
        accreditation = "NAAC A | NIRF Rank 20";
        description = "Also known as NIT Karnataka, NITK Surathkal is situated on the Surathkal coast near Mangalore. It is well-known for research in coastal and ocean engineering and has strong industry ties with offshore oil companies.";
        cutoffs = [
          { examType = "JEE Main"; rank = 4500; category = "General" },
          { examType = "JEE Main"; rank = 11000; category = "OBC" },
          { examType = "JEE Main"; rank = 20000; category = "SC" },
        ];
      },
    ];

    for (college in seedData.vals()) {
      store.add(college);
    };
  };

  /// Apply search filters and return paginated results
  public func search(store : CollegeStore, filter : Types.SearchFilter) : Types.SearchResult {
    let nameQueryLower : ?Text = switch (filter.nameQuery) {
      case (?q) { ?q.toLower() };
      case null { null };
    };
    let locationLower : ?Text = switch (filter.location) {
      case (?l) { ?l.toLower() };
      case null { null };
    };

    let filtered = store.filter(func(c : Types.CollegeRecord) : Bool {
      let nameMatch = switch (nameQueryLower) {
        case (?q) { c.name.toLower().contains(#text q) };
        case null { true };
      };
      let locationMatch = switch (locationLower) {
        case (?l) {
          c.location.toLower().contains(#text l) or
          c.state.toLower().contains(#text l)
        };
        case null { true };
      };
      let minFeesMatch = switch (filter.minFees) {
        case (?min) { c.annualFees >= min };
        case null { true };
      };
      let maxFeesMatch = switch (filter.maxFees) {
        case (?max) { c.annualFees <= max };
        case null { true };
      };
      nameMatch and locationMatch and minFeesMatch and maxFeesMatch
    });

    let totalCount = filtered.size();
    let start = filter.page * filter.pageSize;
    let end_ = Nat.min(start + filter.pageSize, totalCount);

    let pageItems = if (start >= totalCount) {
      []
    } else {
      filtered.sliceToArray(start.toInt(), end_.toInt())
    };

    { colleges = pageItems; totalCount = totalCount }
  };

  /// Look up a single college by id
  public func getById(store : CollegeStore, id : Types.CollegeId) : ?Types.CollegeRecord {
    store.find(func(c : Types.CollegeRecord) : Bool { c.id == id })
  };

  /// Fetch multiple colleges by id list (for comparison)
  public func getByIds(store : CollegeStore, ids : [Types.CollegeId]) : [Types.CollegeRecord] {
    ids.filterMap<Types.CollegeId, Types.CollegeRecord>(
      func(id) { store.find(func(c : Types.CollegeRecord) : Bool { c.id == id }) }
    )
  };

  /// Return colleges that match predictor criteria (rule-based cutoff lookup)
  public func predict(store : CollegeStore, predictor : Types.PredictorQuery) : [Types.CollegeRecord] {
    let rank = predictor.rank;
    let examLower = predictor.examType.toLower();

    let isJeeMain = examLower == "jee main" or examLower == "jeemain" or examLower == "jee_main";
    let isJeeAdvanced = examLower == "jee advanced" or examLower == "jeeadvanced" or examLower == "jee_advanced";

    store.filter(func(c : Types.CollegeRecord) : Bool {
      // Find matching cutoff for the exam type
      let matchingCutoffs = c.cutoffs.filter(func(cut : Types.CutoffRecord) : Bool {
        let cutExamLower = cut.examType.toLower();
        if (isJeeMain) {
          cutExamLower == "jee main"
        } else if (isJeeAdvanced) {
          cutExamLower == "jee advanced"
        } else {
          cutExamLower == examLower
        }
      });

      // Check if rank qualifies for any General category cutoff
      let generalCutoffs = matchingCutoffs.filter(func(cut : Types.CutoffRecord) : Bool {
        cut.category.toLower() == "general"
      });

      if (generalCutoffs.size() > 0) {
        rank <= generalCutoffs[0].rank
      } else {
          // No exam-specific cutoff found, try rank-based tier logic
          if (isJeeMain) {
            if (rank <= 500) {
              // IITs tier — accept colleges with iit in id
              c.id.contains(#text "iit")
            } else if (rank <= 2000) {
              c.id.contains(#text "iit") or c.id == "bits-pilani"
            } else if (rank <= 5000) {
              c.id.contains(#text "nit") or c.id.contains(#text "iit")
            } else if (rank <= 15000) {
              c.id.contains(#text "nit") or c.id.contains(#text "iiit") or
              c.id == "bits-pilani" or c.id == "dtu-delhi"
            } else {
              true
            }
          } else if (isJeeAdvanced) {
            if (rank <= 500) {
              c.id.contains(#text "iit")
            } else if (rank <= 1000) {
              c.id.contains(#text "iit") or c.id == "bits-pilani"
            } else if (rank <= 5000) {
              c.id.contains(#text "iit") or c.id.contains(#text "nit") or c.id == "bits-pilani"
            } else {
              c.id.contains(#text "nit") or c.id.contains(#text "iiit")
            }
          } else {
            false
          }
      }
    }).toArray()
  };

  /// Collect distinct location strings from all colleges
  public func allLocations(store : CollegeStore) : [Text] {
    let seen = Set.empty<Text>();
    store.forEach(func(c : Types.CollegeRecord) {
      seen.add(c.location);
    });
    seen.toArray()
  };
};
