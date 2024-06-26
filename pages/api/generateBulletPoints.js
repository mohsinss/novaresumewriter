import { Anthropic } from "@anthropic-ai/sdk";

const dummyExperienceItems = [
  {
    positionTitle: "Software Engineer",
    companyName: "Acme Inc.",
  },
  {
    positionTitle: "Data Analyst",
    companyName: "Contoso Corp.",
  },
];

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { experienceItems = [], text = "Develop and maintain software applications.", languageStyle = "professional", keywords = "programming, software engineering" } = req.body;

    const anthropic = new Anthropic({
        apiKey: process.env.ANTHROPIC_API_KEY  // Ensure you use an environment variable for security
    });

    // Use dummyExperienceItems if experienceItems array is empty
    const items = experienceItems.length > 0 ? experienceItems : dummyExperienceItems;

    if (items.length === 0) {
      return res.status(200).json({ message: "No experience items provided", experienceItems: [] });
    }

    try {
      const updatedExperienceItems = await Promise.all(
        items.map(async (item) => {
          const prompt = `Generate 5 bullet points for the position "${item.positionTitle}" at "${item.companyName}" using ${languageStyle} style and keywords: ${keywords}. Job description: ${text}`;
          console.log("Prompt:", prompt);

          const response = await anthropic.messages.create({
            model: "claude-3-opus-20240229",
            max_tokens: 1000,
            messages: [{ role: "user", content: prompt }]
          });

          console.log("Anthropic API Response:", response);

          if (!response || !response.result || !response.result.content || response.result.content.trim() === "") {
            console.error("No content or empty response from Anthropic API");
            return res.status(500).json({ message: "No content generated by AI" });
          }

          const generatedBulletPoints = response.result.content.trim().split("\n").filter(line => line.trim());
          return { ...item, responsibilities: generatedBulletPoints };
        })
      );

      res.status(200).json({ experienceItems: updatedExperienceItems });
    } catch (error) {
      console.error("API error:", error);
      res.status(500).json({ message: "Failed to generate bullet points", error: error.message });
    }
  } else {
    res.status(405).end("Method Not Allowed");
  }
}