import Card from "../models/card.model.js";

const data = [
  {
    title: "Branches",
    description:
      "Abstract Branches lets you manage, version, and document your designs in one place.",
  },
  {
    title: "Manage your account",
    description:
      "Configure your account settings, such as your email, profile details, and password.",
  },
  {
    title: "Manage organizations, teams, and projects",
    description:
      "Use Abstract organizations, teams, and projects to organize your people and your work.",
  },
  {
    title: "Manage billing",
    description: "Change subscriptions and payment details.",
  },
  {
    title: "Authenticate to Abstract",
    description:
      "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
  },
  {
    title: "Abstract support",
    description: "Get in touch with a human.",
  },
];

const records = data.map((item, index) => ({
  id: index + 1,
  title: item.title,
  description: item.description,
}));

const recordDatabase = async () => {
  try {
    await Card.deleteMany({});

    for (const record of records) {
      await Card.updateOne({ id: record.id }, record, { upsert: true });
    }
    console.log("Card insert Successfully!");
  } catch (error) {
    console.log("Inserting Error", error);
  }
};

export default recordDatabase;
