document.addEventListener('keyup', calculate);

function calculate() {
    const selectedStat = document.querySelector('input[name="stat"]:checked').value;

    // 各数値を取得とセレクトされたオプションに基づくデータの取得
    const values = {
        stat1: getStatValue('select1', 'input1'),
        stat2: getStatValue('select2', 'input2'),
        stat3: getStatValue('select3', 'input3'),
        stat4: getStatValue('select4', 'input4'),
    };

    let result = 0;

    // 選択された計算方法に基づく計算
    switch (selectedStat) {
        case 'critRate':
            result = (values.stat1.critRate || 0) + (values.stat2.critRate || 0) + (values.stat3.critRate || 0) + (values.stat4.critRate || 0) +
                     (values.stat1.critDamage || 0) + (values.stat2.critDamage || 0) + (values.stat3.critDamage || 0) + (values.stat4.critDamage || 0);
            break;
        case 'energyRecharge':
            result = (values.stat1.energyRecharge || 0) + (values.stat2.energyRecharge || 0) + (values.stat3.energyRecharge || 0) + (values.stat4.energyRecharge || 0) +
                     (values.stat1.critRate || 0) + (values.stat2.critRate || 0) + (values.stat3.critRate || 0) + (values.stat4.critRate || 0) +
                     (values.stat1.critDamage || 0) + (values.stat2.critDamage || 0) + (values.stat3.critDamage || 0) + (values.stat4.critDamage || 0);
            break;
        case 'defense':
            result = (values.stat1.defense || 0) + (values.stat2.defense || 0) + (values.stat3.defense || 0) + (values.stat4.defense || 0) +
                     (values.stat1.critRate || 0) + (values.stat2.critRate || 0) + (values.stat3.critRate || 0) + (values.stat4.critRate || 0) +
                     (values.stat1.critDamage || 0) + (values.stat2.critDamage || 0) + (values.stat3.critDamage || 0) + (values.stat4.critDamage || 0);
            break;
        case 'hp':
            result = (values.stat1.hp || 0) + (values.stat2.hp || 0) + (values.stat3.hp || 0) + (values.stat4.hp || 0) +
                     (values.stat1.critRate || 0) + (values.stat2.critRate || 0) + (values.stat3.critRate || 0) + (values.stat4.critRate || 0) +
                     (values.stat1.critDamage || 0) + (values.stat2.critDamage || 0) + (values.stat3.critDamage || 0) + (values.stat4.critDamage || 0);
            break;
        case 'mastery':
            result = (values.stat1.mastery || 0) + (values.stat2.mastery || 0) + (values.stat3.mastery || 0) + (values.stat4.mastery || 0) +
                     (values.stat1.critRate || 0) + (values.stat2.critRate || 0) + (values.stat3.critRate || 0) + (values.stat4.critRate || 0) +
                     (values.stat1.critDamage || 0) + (values.stat2.critDamage || 0) + (values.stat3.critDamage || 0) + (values.stat4.critDamage || 0);
            break;
    }

    document.getElementById('result').textContent = `結果: ${result.toFixed(2)}`;
}

// 関数：選択されたステータスの数値を取得
function getStatValue(selectId, inputId) {
    const selectedStat = document.getElementById(selectId).value;
    const inputValue = parseFloat(document.getElementById(inputId).value) || 0;

    let value = {};
    if (selectedStat === "critRate") {
        value.critRate = inputValue * 2; // 会心率は二倍
    } else if (selectedStat === "critDamage") {
        value.critDamage = inputValue;
    } else if (selectedStat === "attackPower") {
        value.attackPower = inputValue;
    } else if (selectedStat === "energyRecharge") {
        value.energyRecharge = inputValue;
    } else if (selectedStat === "hp") {
        value.hp = inputValue;
    } else if (selectedStat === "defense") {
        value.defense = inputValue;
    } else if (selectedStat === "mastery") {
        value.mastery = inputValue * 0.25; // 熟知は0.25倍
    }
    return value;
}
