
    const defaultCoreStats = {
        dmg: 196000,
        blocked: 196000,
        healing: 196000,
        Tank: 70,       
        Support: 100,    
        DPS: 77          
    };

    let coreStats = { ...defaultCoreStats };
    let farmsPerDayValue = 4; 

    const database = {
        "Adam Warlock": { class: "Support", lines: [[0,0],[0,0],[0,0],[0,0],[0,0]] },
        "Angela": { class: "Tank", lines: [[7500, 6], [15000, 13], [22000, 19], [30000, 25], [30000, 25]] },
        "Black Cat": { class: "DPS", lines: [[3700, 5], [7500, 10], [11000, 15], [15000, 20], [15000, 20]] },
        "Black Panther / BP": { class: "DPS", lines: [[3700, 5], [7500, 10], [11000, 15], [15000, 20], [15000, 20]] },
        "Black Widow / BW": { class: "DPS", lines: [[3100, 5], [6200, 10], [9200, 15], [12000, 20], [12000, 20]] },
        "Blade": { class: "DPS", lines: [[5100, 5], [10000, 10], [15000, 15], [20000, 20], [20000, 20]] },
        "Bruce Banner / Hulk": { class: "Tank", lines: [[10000, 5], [21000, 11], [31000, 16], [42000, 22], [42000, 22]] },
        "Captain America / Cap": { class: "Tank", lines: [[9000, 6], [18000, 13], [27000, 19], [36000, 25], [36000, 25]] },
        "Cloak and Dagger / Cnd": { class: "Support", lines: [[5400, 7.5], [11000, 15], [16000, 19], [36000, 25], [36000, 25]] },
        "Cyclops": { class: "DPS", lines: [[5700, 6], [11000, 11], [17000, 17], [23000, 23], [23000, 23]] },
        "Daredevil": { class: "DPS", lines: [[3700, 5], [7500, 10], [11000, 15], [15000, 20], [15000, 20]] },
        "Deadpool": { class: "Support", lines: [[5700, 7.5], [11000, 15], [17000, 22.5], [23000, 30], [23000, 30]] },
        "Devil Dinosaur": { class: "Tank", lines: [[14000, 7], [27000, 15], [41000, 22], [55000, 29], [55000, 29]] },
        "Doctor Strange": { class: "Tank", lines: [[10000, 6], [21000, 13], [31000, 19], [42000, 25], [42000, 25]] },
        "Elsa Bloodstone": { class: "DPS", lines: [[5700, 6], [11000, 11], [17000, 17], [23000, 23], [23000, 23]] },
        "Emma Frost": { class: "Tank", lines: [[10000, 7], [21000, 15], [31000, 22], [42000, 29], [42000, 29]] },
        "Gambit": { class: "Support", lines: [[4500, 7.5], [9100, 15], [14000, 22.5], [18000, 30], [18000, 30]] },
        "Groot": { class: "Tank", lines: [[14000, 6], [27000, 13], [41000, 19], [55000, 25], [55000, 25]] },
        "Hawkeye": { class: "DPS", lines: [[5100, 6], [10000, 11], [15000, 17], [20000, 23], [20000, 23]] },
        "Hela": { class: "DPS", lines: [[5700, 7], [11000, 13], [17000, 19], [23000, 25], [23000, 25]] },
        "Human Torch": { class: "DPS", lines: [[4400, 4], [8800, 8], [13000, 12], [18000, 17], [18000, 17]] },
        "Invisible Woman": { class: "Support", lines: [[5400, 7.5], [11000, 15], [16000, 22.5], [21000, 30], [21000, 30]] },
        "Iron Fist": { class: "DPS", lines: [[3100, 4], [6200, 8], [9200, 12], [12000, 17], [12000, 17]] },
        "Iron Man": { class: "DPS", lines: [[4400, 4], [8800, 8], [13000, 12], [18000, 17], [18000, 17]] },
        "Jeff": { class: "Support", lines: [[5400, 12.5], [11000, 13], [16000, 19], [21000, 25.5], [21000, 25.5]] },
        "Jubilee not 100%": { class: "Support", lines: [[6200, 8.5], [12000, 17], [18000, 26.5], [25000, 34], [25000, 34]] },
        "Loki": { class: "Support", lines: [[5400, 7.5], [11000, 15], [16000, 22.5], [21000, 30], [21000, 30]] },
        "Luna Snow": { class: "Support", lines: [[6200, 7.5], [12000, 15], [18000, 22.5], [25000, 30], [25000, 30]] },
        "Magik": { class: "DPS", lines: [[4400, 5], [8800, 10], [13000, 15], [18000, 20], [18000, 20]] },
        "Magneto": { class: "Tank", lines: [[9000, 7], [18000, 15], [27000, 22], [36000, 29], [36000, 29]] },
        "Mantis": { class: "Support", lines: [[0,0],[0,0],[0,0],[0,0],[0,0]] },
        "Moon Knight": { class: "DPS", lines: [[4400, 4], [8800, 8], [13000, 12], [18000, 17], [18000, 17]] },
        "Mr. Fantastic": { class: "DPS", lines: [[5100, 5], [10000, 10], [15000, 15], [20000, 20], [20000, 20]] },
        "Namor": { class: "DPS", lines: [[5100, 4], [10000, 8], [15000, 12], [20000, 17], [20000, 17]] },
        "Peni Parker": { class: "Tank", lines: [[7500, 7], [15000, 15], [22000, 22], [30000, 29], [30000, 29]] },
        "Phoenix": { class: "DPS", lines: [[5700, 7], [11000, 13], [17000, 19], [23000, 25], [23000, 25]] },
        "Psylocke": { class: "DPS", lines: [[3700, 5], [7500, 10], [11000, 15], [15000, 20], [15000, 20]] },
        "Rocket Raccoon": { class: "Support", lines: [[5400, 7.5], [11000, 15], [16000, 22.5], [21000, 30], [21000, 30]] },
        "Rogue": { class: "Tank", lines: [[9000, 6], [18000, 13], [27000, 19], [36000, 25], [36000, 25]] },
        "Scarlet Witch": { class: "DPS", lines: [[3700, 5], [7500, 10], [11000, 15], [15000, 20], [15000, 20]] },
        "Spiderman": { class: "DPS", lines: [[3100, 4], [6200, 8], [9200, 12], [12000, 17], [12000, 17]] },
        "Squirrel Girl": { class: "DPS", lines: [[5100, 5], [10000, 10], [15000, 15], [20000, 20], [20000, 20]] },
        "Star-Lord": { class: "DPS", lines: [[4400, 5], [8800, 10], [13000, 15], [18000, 20], [18000, 20]] },
        "Storm": { class: "DPS", lines: [[4400, 5], [8800, 10], [13000, 15], [18000, 20], [18000, 20]] },
        "The Punisher": { class: "DPS", lines: [[5100, 5], [10000, 10], [15000, 15], [20000, 20], [20000, 20]] },
        "The Thing": { class: "Tank", lines: [[10000, 7], [21000, 15], [31000, 22], [42000, 29], [42000, 29]] },
        "Thor": { class: "Tank", lines: [[9000, 6], [18000, 13], [27000, 19], [36000, 25], [36000, 25]] },
        "Ultron": { class: "Support", lines: [[0,0],[0,0],[0,0],[0,0],[0,0]] },
        "Venom": { class: "Tank", lines: [[10000, 6], [21000, 13], [31000, 19], [42000, 25], [42000, 25]] },
        "White Fox": { class: "Support", lines: [[5400, 7.5], [11000, 15], [16000, 22.5], [21000, 30], [21000, 30]] },
        "Winter Soldier": { class: "DPS", lines: [[3700, 4], [7500, 8], [11000, 12], [15000, 17], [15000, 17]] },
        "Wolverine": { class: "DPS", lines: [[4400, 5], [8800, 10], [13000, 15], [18000, 20], [18000, 20]] }
    };

    const levelRanges = [
        { min: 1,  max: 5,  costPerLevel: 125,  questPoints: 7,  timePoints: 80,  name: "Lvl 1 - 5", badge: "" },
        { min: 5,  max: 10, costPerLevel: 240,  questPoints: 13, timePoints: 80,  name: "Lvl 5 - 10", badge: "" },
        { min: 10, max: 15, costPerLevel: 400,  questPoints: 20, timePoints: 80,  name: "Lvl 10 - 15", badge: "" },
        { min: 15, max: 20, costPerLevel: 480,  questPoints: 26, timePoints: 80,  name: "Lvl 15 - 20", badge: '<span class="rank-badge rank-lord">[Lord]</span>' },
        { min: 20, max: 50, costPerLevel: 1600, questPoints: 80, timePoints: 240, name: "Lvl 20 - 50", badge: '<span class="rank-badge rank-champion">[Champion]</span>' }
    ];

    const roleSortOrder = { "Tank": 1, "DPS": 2, "Support": 3 };
    const sortedCharacterNames = Object.keys(database).sort((a, b) => {
        const roleA = database[a].class;
        const roleB = database[b].class;
        if (roleSortOrder[roleA] !== roleSortOrder[roleB]) {
            return roleSortOrder[roleA] - roleSortOrder[roleB];
        }
        return a.localeCompare(b);
    });

    let selectedCharacterKey = "custom"; 

    const searchInput = document.getElementById("charSearch");
    const panel = document.getElementById("suggestionsPanel");
    const roleFilter = document.getElementById("roleFilter");
    const customInputsDiv = document.getElementById("customInputs");
    const infoBox = document.getElementById("characterInfoBox");
    const infoText = document.getElementById("characterInfoText");

    const roleInfoBox = document.getElementById("roleInfoBox");
    const roleInfoTitle = document.getElementById("roleInfoTitle");
    const roleInfoText = document.getElementById("roleInfoText");

    const statsModal = document.getElementById("statsModal");
    const openStatsBtn = document.getElementById("openStatsModal");
    const closeStatsBtn = document.getElementById("closeStatsModal");
    const saveStatsBtn = document.getElementById("saveStatsModal");
    const resetStatsBtn = document.getElementById("resetStatsModal");

    openStatsBtn.addEventListener("click", () => {
        document.getElementById("modalDmg").value = coreStats.dmg;
        document.getElementById("modalBlocked").value = coreStats.blocked;
        document.getElementById("modalHealing").value = coreStats.healing;
        document.getElementById("modalKos").value = coreStats.Tank;
        document.getElementById("modalAssists").value = coreStats.Support;
        document.getElementById("modalFinals").value = coreStats.DPS;
        statsModal.classList.add("active");
    });

    closeStatsBtn.addEventListener("click", () => statsModal.classList.remove("active"));

    resetStatsBtn.addEventListener("click", () => {
        document.getElementById("modalDmg").value = defaultCoreStats.dmg;
        document.getElementById("modalBlocked").value = defaultCoreStats.blocked;
        document.getElementById("modalHealing").value = defaultCoreStats.healing;
        document.getElementById("modalKos").value = defaultCoreStats.Tank;
        document.getElementById("modalAssists").value = defaultCoreStats.Support;
        document.getElementById("modalFinals").value = defaultCoreStats.DPS;
    });

    saveStatsBtn.addEventListener("click", () => {
        let newDmg = Math.min(200000, Math.max(0, parseFloat(document.getElementById("modalDmg").value) || 0));
        let newBlocked = Math.min(200000, Math.max(0, parseFloat(document.getElementById("modalBlocked").value) || 0));
        let newHealing = Math.min(200000, Math.max(0, parseFloat(document.getElementById("modalHealing").value) || 0));
        let newFinals = Math.min(80, Math.max(0, parseFloat(document.getElementById("modalFinals").value) || 0));
        
        coreStats.dmg = newDmg;
        coreStats.blocked = newBlocked;
        coreStats.healing = newHealing;
        coreStats.Tank = Math.max(0, parseFloat(document.getElementById("modalKos").value) || 0);
        coreStats.Support = Math.max(0, parseFloat(document.getElementById("modalAssists").value) || 0);
        coreStats.DPS = newFinals;

        statsModal.classList.remove("active");
        calculate(); 
    });

    function showSuggestions() {
        const query = searchInput.value.toLowerCase();
        const activeRole = roleFilter.value;
        panel.innerHTML = "";

        if (query === "" || "-- custom thresholds setup --".includes(query)) {
            const div = document.createElement("div");
            div.className = "suggestion-item";
            div.innerHTML = `<span>-- Custom Thresholds Setup --</span><span class="role-badge badge-custom">Custom</span>`;
            div.onclick = () => selectHero("custom", "-- Custom Thresholds Setup --");
            panel.appendChild(div);
        }

        sortedCharacterNames.forEach(name => {
            const data = database[name];
            const matchesSearch = name.toLowerCase().includes(query);
            const matchesRole = (activeRole === "ALL" || data.class === activeRole);

            if (matchesSearch && matchesRole) {
                const div = document.createElement("div");
                div.className = "suggestion-item";
                let badgeClass = data.class.toLowerCase();
                div.innerHTML = `<span>${name}</span><span class="role-badge badge-${badgeClass}">${data.class}</span>`;
                div.onclick = () => selectHero(name, name);
                panel.appendChild(div);
            }
        });
        panel.style.display = panel.children.length > 0 ? "block" : "none";
    }

    function selectHero(key, displayName) {
        selectedCharacterKey = key;
        searchInput.value = (key === "custom") ? "" : displayName;
        panel.style.display = "none";
        customInputsDiv.style.display = (key === "custom") ? "block" : "none";

        if (key === "Scarlet Witch") {
            infoText.textContent = "Relying solely on their primary attacks prolongs the process and may prevent you from reaching the cap within 60 minutes";
            infoBox.style.display = "block";
        } else if (key === "White Fox") {
            infoText.textContent = "For whitefox's calculation to apply, there must always be 2 white foxes in a game";
            infoBox.style.display = "block";
        } else if (key === "Adam Warlock" || key === "Mantis" || key === "Ultron") {
            infoText.textContent = "Not calculable as their healing aspects can only be fully utilized in special farms.";
            infoBox.style.display = "block";
        } else {
            infoBox.style.display = "none";
        }

        if (key !== "custom" && database[key]) {
            const charClass = database[key].class;
            if (charClass === "Support") {
                coreStats.Tank = 70;      
                coreStats.Support = 100;  
            } else if (charClass === "Tank") {
                coreStats.Tank = 150;     
                coreStats.Support = 120;  
            } else {
                coreStats.Tank = defaultCoreStats.Tank;
                coreStats.Support = defaultCoreStats.Support;
            }
        } else {
            coreStats.Tank = defaultCoreStats.Tank;
            coreStats.Support = defaultCoreStats.Support;
        }

        calculate();
    }

    function updateRoleInfoBox() {
        const selectedRole = roleFilter.value;
        roleInfoBox.className = "info-banner-base role-info-card";
        
        if (selectedRole === "Tank") {
            roleInfoTitle.textContent = "🛡️ Tank Class Active";
            roleInfoText.textContent = "Tanks rely heavily on Damage Blocked and high round KOs to optimize level progression loops.";
            roleInfoBox.classList.add("tank-active");
            roleInfoBox.style.display = "block";
        } else if (selectedRole === "DPS") {
            roleInfoTitle.textContent = "⚔️ DPS Class Active";
            roleInfoText.textContent = "DPS classes prioritize absolute Damage output and Final Hits. Keep track of the 80 maximum cap for Final Hits!";
            roleInfoBox.classList.add("dps-active");
            roleInfoBox.style.display = "block";
        } else if (selectedRole === "Support") {
            roleInfoTitle.textContent = "💚 Support Class Active";
            roleInfoText.textContent = "Supports scale through Healing output and combined KOs/Assists. Remember the halving rule when entering custom stats!";
            roleInfoBox.classList.add("support-active");
            roleInfoBox.style.display = "block";
        } else {
            roleInfoBox.style.display = "none";
        }
    }

    let holdTimeout = null;
    let holdInterval = null;

    function bindCounterControl(btnId, direction) {
        const btn = document.getElementById(btnId);
        
        const triggerStart = (e) => {
            e.preventDefault();
            adjustCounterValue(direction * 1); 
            
            holdTimeout = setTimeout(() => {
                holdInterval = setInterval(() => {
                    adjustCounterValue(direction * 2); 
                }, 140);
            }, 1000);
        };

        const triggerEnd = () => {
            clearTimeout(holdTimeout);
            clearInterval(holdInterval);
        };

        btn.addEventListener("mousedown", triggerStart);
        btn.addEventListener("mouseup", triggerEnd);
        btn.addEventListener("mouseleave", triggerEnd);
        btn.addEventListener("touchstart", triggerStart, { passive: false });
        btn.addEventListener("touchend", triggerEnd);
        btn.addEventListener("touchcancel", triggerEnd);
    }

    function adjustCounterValue(amount) {
        farmsPerDayValue += amount;
        if (farmsPerDayValue > 24) farmsPerDayValue = 24;
        if (farmsPerDayValue < 0) farmsPerDayValue = 0;
        
        const display = document.getElementById("farmsPerDayDisplay");
        display.textContent = farmsPerDayValue === 0 ? "None" : farmsPerDayValue;
        calculate();
    }

    bindCounterControl("btnMinus", -1);
    bindCounterControl("btnPlus", 1);

    searchInput.addEventListener("click", () => { searchInput.value = ""; showSuggestions(); });
    searchInput.addEventListener("focus", showSuggestions);
    searchInput.addEventListener("input", showSuggestions);
    
    roleFilter.addEventListener("change", () => {
        showSuggestions();
        updateRoleInfoBox();
    });

    const targetLevelInput = document.getElementById("targetLevel");
    const targetLevelHint = document.getElementById("targetLevelHint");

    targetLevelInput.addEventListener("focus", () => {
        targetLevelHint.style.display = "block";
    });
    targetLevelInput.addEventListener("blur", () => {
        targetLevelHint.style.display = "none";
    });

    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !panel.contains(e.target) && !roleFilter.contains(e.target)) {
            panel.style.display = "none";
        }
    });

    document.getElementById("currentLevel").addEventListener("input", calculate);
    targetLevelInput.addEventListener("input", calculate);
    document.getElementById("customClass").addEventListener("change", calculate);
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`custom_d${i}`).addEventListener('input', calculate);
        document.getElementById(`custom_c${i}`).addEventListener('input', calculate);
    }

    function formatFarms(farmsValue) {
        if (farmsValue <= 0) return "0 Farms";
        return `${Math.round(farmsValue)} Farms`;
    }

    function calculate() {
        let currentLvl = parseInt(document.getElementById("currentLevel").value) || 1;
        let targetLvl = parseInt(targetLevelInput.value) || 20;

        if (currentLvl < 1) currentLvl = 1; if (currentLvl > 50) currentLvl = 50;
        if (targetLvl < 1) targetLvl = 1; if (targetLvl > 50) targetLvl = 50;

        const tableBody = document.getElementById("resultTableBody");
        const daysResultDisplay = document.getElementById("daysResultDisplay");
        const exactDaysDisplay = document.getElementById("exactDaysDisplay");

        if (selectedCharacterKey === "Adam Warlock" || selectedCharacterKey === "Mantis" || selectedCharacterKey === "Ultron") {
            tableBody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--text-muted); font-style:italic;">This hero is not calculable as their healing aspects can only be fully utilized in special farms.</td></tr>`;
            daysResultDisplay.textContent = "N/A";
            exactDaysDisplay.textContent = "(Not calculable)";
            return;
        }

        let charClass = "";
        let lines = [];

        if (selectedCharacterKey === "custom") {
            charClass = document.getElementById("customClass").value;
            for (let i = 1; i <= 5; i++) {
                const dmg = parseFloat(document.getElementById(`custom_d${i}`).value) || 1;
                const cls = parseFloat(document.getElementById(`custom_c${i}`).value) || 1;
                lines.push([dmg, cls]);
            }
        } else {
            if (!database[selectedCharacterKey]) return;
            charClass = database[selectedCharacterKey].class;
            lines = database[selectedCharacterKey].lines;
        }

      let activeBigStatValue = 0;
let activeClassStatValue = 0;

if (charClass === "DPS") {
    activeBigStatValue = coreStats.dmg;
    activeClassStatValue = coreStats.DPS; 
} else if (charClass === "Tank") {
    activeBigStatValue = coreStats.blocked;
    activeClassStatValue = coreStats.Tank; 
} else if (charClass === "Support") {
    activeBigStatValue = coreStats.healing;
    activeClassStatValue = coreStats.Tank + coreStats.Support; 
}
        let farmsCumulative = 0;
        let firstPrintedRow = true;
        tableBody.innerHTML = ""; 

        levelRanges.forEach((range, index) => {
            if (range.min >= targetLvl) return;

            const activeStart = Math.max(currentLvl, range.min);
            const activeEnd = Math.min(targetLvl, range.max);

            if (activeStart >= activeEnd) return;

            const remainingLevelsInRange = activeEnd - activeStart;
            const dynamicRangeCost = remainingLevelsInRange * range.costPerLevel;

            const threshDmg = lines[index][0];
            const threshCls = lines[index][1];

            const dmgPoints = Math.floor(activeBigStatValue / threshDmg) * range.questPoints;
            const clsPoints = Math.floor(activeClassStatValue / threshCls) * range.questPoints;
            const totalPointsPerFarm = range.timePoints + dmgPoints + clsPoints;

            const farmsRange = dynamicRangeCost / totalPointsPerFarm;
            farmsCumulative += farmsRange;

            let rowName = `Lvl ${activeStart} - ${activeEnd} ${range.badge}`;

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${rowName}</strong></td>
                <td>${formatFarms(farmsRange)}</td>
                <td>
                    ${firstPrintedRow ? formatFarms(farmsRange) : `<span class="total-label">Lvl ${currentLvl} - ${activeEnd}:</span>${formatFarms(farmsCumulative)}`}
                </td>
            `;
            tableBody.appendChild(tr);
            firstPrintedRow = false;
        });

        if (tableBody.innerHTML === "" || currentLvl >= targetLvl || farmsCumulative <= 0) {
            tableBody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--text-muted);">Your target level is equal to or lower than your current level!</td></tr>`;
            daysResultDisplay.textContent = "0 Days";
            exactDaysDisplay.textContent = "(0.0 Days exact)";
        } else if (farmsPerDayValue === 0) {
            daysResultDisplay.textContent = "N/A";
            exactDaysDisplay.textContent = "(Farms set to None)";
        } else {
            let totalDaysNeeded = farmsCumulative / farmsPerDayValue;
            daysResultDisplay.textContent = `${Math.round(totalDaysNeeded)} Days`;
            exactDaysDisplay.textContent = `(${totalDaysNeeded.toFixed(1)} Days exact)`;
        }
    }

    calculate(); 
