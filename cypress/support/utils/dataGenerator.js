export const generateTestData = (() => {
  let hitCount = 1;
  let lastDate = new Date().toISOString().slice(0, 10);

  return () => {
    const today = new Date();
    const todayStr = today.toISOString().slice(0, 10);

    if (todayStr !== lastDate) {
      hitCount = 1;
      lastDate = todayStr;
    } else {
      hitCount++;
    }

    const randomStr = (length = 10) => {
      const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
      return Array.from(
        { length },
        () => chars[Math.floor(Math.random() * chars.length)]
      ).join("");
    };

    const randomIndoPhone = () => {
      const prefix = "08";
      const number = Math.floor(Math.random() * 1e9)
        .toString()
        .padStart(9, "0");
      return prefix + number;
    };

    const randomItemProcessFamily = () => {
      const options = ["K-Item", "M-Item", "X-Item", "Z-Item"];
      return options[Math.floor(Math.random() * options.length)];
    };

    const formatDateUTC = (date) => {
      return date.toISOString().split(".")[0] + "Z";
    };

    const productNames = [
      "Granule HDPE Putih",
      "Granule HDPE Hitam",
      "Granule LLDPE Daur Ulang",
      "Bijih Plastik PPE Bening",
      "Resin Plastik HDPE",
      "Bahan Kantong Sampah Hitam",
      "Bahan Plastik Kresek Warna",
      "Plastik HDPE Grade A",
      "Masterbatch Putih",
      "Granule PPE Grade B",
    ];

    const itemName =
      productNames[Math.floor(Math.random() * productNames.length)];
    const itemId = `ITEM${Math.floor(
      1000 + Math.random() * 9000
    )}_${todayStr.replace(/-/g, "")}_${hitCount}`;

    const effectiveDate = new Date(today);
    const endDate = new Date(today);
    endDate.setMonth(endDate.getMonth() + 1);

    return {
      todayStr,
      hitCount,
      companyname: `PT. Test QIF CY - ${todayStr} #${hitCount}`,
      email: `test_qif_${todayStr.replace(/-/g, "")}_${hitCount}@yopmail.com`,
      phone: randomIndoPhone(),
      altphone: randomIndoPhone(),
      itemid: itemId,
      displayname: `${itemName} - ${todayStr} #${hitCount}`,
      itemprocessfamily: randomItemProcessFamily(),
      agreementcode: `AG-${todayStr.replace(/-/g, "")}-${hitCount}`,
      agreementname: `Diskon K-Item ${todayStr} #${hitCount}`,
      createddate: formatDateUTC(today),
      effectivedate: formatDateUTC(effectiveDate),
      enddate: formatDateUTC(endDate),
    };
  };
})();
