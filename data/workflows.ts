import { Store, Instagram, Facebook, BarChart3, Truck, ShoppingBag, Mail, Bot, MessageSquare, Search, CreditCard, Youtube, FileImage, Clock, FileText, Rss } from 'lucide-react'

export const workflows = [
  {
    name: "Instagram Post Generator",
    description: "Generate and publish an Instagram post with a script",
    nodes: [
      { id: "1", type: "imageUploader", data: { label: "Upload Image" } },
      { id: "2", type: "textInput", data: { label: "Enter Prompt" } },
      { id: "3", type: "scheduler", data: { label: "Set Schedule" } },
      { id: "4", type: "scriptGenerator", data: { label: "Generate Script" } },
      { id: "5", type: "instagramPublisher", data: { label: "Publish to Instagram" } }
    ],
    edges: [
      { id: "e1-2", source: "1", target: "4" },
      { id: "e2-4", source: "2", target: "4" },
      { id: "e3-5", source: "3", target: "5" },
      { id: "e4-5", source: "4", target: "5" }
    ]
  }
];

export const nodeTypesData = [
  {
    name: "Generate Text",
    description: "Generate text based on the prompt",
    logo: "/assets/logos/image-generator.png",
    type: "textInput",
    icon: FileText,
  },
  {
    name: "text input",
    description: "Generate text based on the prompt",
    logo: "/assets/logos/image-generator.png",
    type: "textInput",
    icon: FileText,
  },
  {
    name: "Image Uploader",
    description: "Upload files to the server",
    logo: "/assets/logos/file-uploader.png",
    type: "fileUploader",
    icon: FileImage,
  },
  {
    name: "Describe Image",
    description: "Describe the image given as input",
    logo: "/assets/logos/image-generator.png",
    type: "classic",
    icon: FileImage,
  },
  {
    name: "Instagram",
    description: "Publish and manage Instagram content",
    logo: "/assets/logos/instagram.png",
    type: "instagram",
    icon: Instagram,
  },
  {
    name: "YouTube",
    description: "Manage YouTube videos and channels",
    logo: "/assets/logos/youtube.png",
    type: "youtube",
    icon: Youtube,
  },
  {
    name: "Facebook",
    description: "Interact with Facebook pages and ads",
    logo: "/assets/logos/facebook.png",
    type: "facebook",
    icon: Facebook,
  },
  {
    name: "Shopify",
    description: "Integrate with Shopify e-commerce platform",
    logo: "/assets/logos/shopify.png",
    type: "shopify",
    icon: Store,
  },
  {
    name: "TikTok",
    description: "Create and manage TikTok content",
    logo: "/assets/logos/tiktok.png",
    type: "tiktok",
    icon: FileImage,
  },
  {
    name: "Image Generator",
    description: "Generate images based on prompts",
    logo: "/assets/logos/image-generator.png",
    type: "imageGenerator",
    icon: FileImage,
  },
  {
    name: "Gmail Sender",
    description: "Send emails through Gmail",
    logo: "/assets/logos/gmail.png",
    type: "gmailSender",
    icon: Mail,
  },
  {
    name: "Text to Text Description",
    description: "Convert text input to detailed description",
    logo: "/assets/logos/text-description.png",
    type: "textDescription",
    icon: FileText,
  },
  {
    name: "Google Sheets",
    description: "Interact with Google Sheets",
    logo: "/assets/logos/google-sheets.png",
    type: "googleSheets",
    icon: FileText,
  },
  {
    name: "Scheduler",
    description: "Schedule tasks and workflows",
    logo: "/assets/logos/scheduler.png",
    type: "scheduler",
    icon: Clock,
  },
  {
    name: "Meta Analyse",
    description: "Analyze Meta (Facebook) data and insights",
    logo: "/assets/logos/meta-analyse.png",
    type: "metaAnalyse",
    icon: BarChart3,
  },
  {
    name: "Maestro Delivery",
    description: "Manage deliveries through Maestro",
    logo: "/assets/logos/maestro-delivery.png",
    type: "maestroDelivery",
    icon: Truck,
  },
  {
    name: "Yalidine",
    description: "Integrate with Yalidine shipping services",
    logo: "/assets/logos/yalidine.png",
    type: "yalidine",
    icon: ShoppingBag,
  },
  {
    name: "ChatGPT",
    description: "Integrate ChatGPT for AI-powered conversations",
    logo: "/assets/logos/chatgpt.png",
    type: "chatgpt",
    icon: Bot,
  },
  {
    name: "Messages",
    description: "Manage and send messages across platforms",
    logo: "/assets/logos/messages.png",
    type: "messages",
    icon: MessageSquare,
  },
  {
    name: "RSS Feed",
    description: "Fetch and process RSS feeds",
    logo: "/assets/logos/rss.png",
    type: "rssFeed",
    icon: Rss,
  },
  {
    name: "Social Media Scheduler",
    description: "Schedule posts across multiple social media platforms",
    logo: "/assets/logos/social-scheduler.png",
    type: "socialScheduler",
    icon: Clock,
  },
  {
    name: "Content Aggregator",
    description: "Aggregate content from various sources",
    logo: "/assets/logos/content-aggregator.png",
    type: "contentAggregator",
    icon: FileText,
  }
];

