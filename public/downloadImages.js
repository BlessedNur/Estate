const fs = require("fs");
const path = require("path");
const axios = require("axios");

const images = [
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q3.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q1.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q2.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q3.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q4.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q5.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q6.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q7.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q8.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q9.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q10.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q11.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q12.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q13.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q14.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q15.jpg",
             alt: "RoamLite Tiny House Exterior View",
  },
  {
    id: "img-roamlite-001",

     url:"https://containerx-press.com/wp-content/uploads/2025/01/q16.png",
             alt: "RoamLite Tiny House Exterior View",
  },
];

const downloadFolder = path.join(__dirname, "images");

if (!fs.existsSync(downloadFolder)) {
  fs.mkdirSync(downloadFolder);
}

const getStartingIndex = () => {
  const files = fs.readdirSync(downloadFolder);
  const imageFiles = files.filter(
    (file) => file.startsWith("image-") && path.extname(file)
  );
  if (imageFiles.length === 0) return 1;

  // Extract the highest number from existing files
  const maxIndex = Math.max(
    ...imageFiles.map((file) => parseInt(file.match(/image-(\d+)/)?.[1], 10))
  );
  return maxIndex + 1;
};

const downloadImage = async (url, filename) => {
  const filePath = path.join(downloadFolder, filename);
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });
  response.data.pipe(fs.createWriteStream(filePath));
  return new Promise((resolve, reject) => {
    response.data.on("end", () => resolve(filePath));
    response.data.on("error", (err) => reject(err));
  });
};

const updateLinks = async () => {
  let startingIndex = getStartingIndex();
  const updatedImages = [];

  for (const img of images) {
    const extension = path.extname(img.url);
    const localFilename = `image-${startingIndex}${extension}`;
    try {
      await downloadImage(img.url, localFilename);
      updatedImages.push({
        ...img,
        url: `./images/${localFilename}`,
      });
      console.log(`Downloaded: ${img.url} -> ./images/${localFilename}`);
      startingIndex++;
    } catch (error) {
      console.error(`Failed to download ${img.url}:`, error.message);
    }
  }

  fs.writeFileSync(
    path.join(__dirname, "updatedImages.json"),
    JSON.stringify(updatedImages, null, 2)
  );
  console.log("Updated image links saved to updatedImages.json");
};

updateLinks().catch((err) => console.error("Error updating links:", err));
