export const conditions = [
  // Cast domain
  {
    id: "cast_normal",
    domain: "cast",
    label: "Cast looks normal",
    urgency: "normal",
    color: "emerald",
    actionText: "Continue monitoring as normal. Check toes daily for color, warmth, and movement.",
    description: "The cast appears intact and well-fitting. Toes look pink and warm with good capillary refill.",
  },
  {
    id: "cast_too_tight",
    domain: "cast",
    label: "Cast may be too tight",
    urgency: "urgent",
    color: "red",
    actionText: "Contact your care team or go to urgent care now. Do not wait until the next appointment.",
    description: "Toes appear purple, white, dusky, or swollen — possible signs of restricted circulation. This requires immediate attention.",
  },
  {
    id: "cast_wet_or_damaged",
    domain: "cast",
    label: "Cast appears wet or damaged",
    urgency: "urgent",
    color: "red",
    actionText: "Call your care team today. A wet or structurally compromised cast needs prompt replacement.",
    description: "The cast shows visible moisture, soft spots, cracking, or structural damage. Wet plaster loses its corrective shape and can cause skin breakdown.",
  },
  {
    id: "cast_loose",
    domain: "cast",
    label: "Cast may be too loose",
    urgency: "monitor",
    color: "amber",
    actionText: "Call your care team to report this. A loose cast may not be holding the correction.",
    description: "The cast appears to be gapping away from the leg or sliding. A loose cast does not maintain the correction between appointments.",
  },

  // Brace / AFO domain
  {
    id: "brace_normal",
    domain: "brace",
    label: "Brace looks correctly worn",
    urgency: "normal",
    color: "emerald",
    actionText: "Brace looks properly applied. Continue your wear schedule as prescribed.",
    description: "The heel appears fully seated in the shoe, straps are buckled correctly, and no visible skin irritation is present at the margins.",
  },
  {
    id: "brace_heel_not_seated",
    domain: "brace",
    label: "Heel may not be fully seated",
    urgency: "monitor",
    color: "amber",
    actionText: "Remove and reapply the brace, ensuring the heel is firmly down in the shoe before buckling. Contact your orthotist if this keeps happening.",
    description: "A visible gap at the heel, bunched sock, or elevated heel inside the shoe suggests the foot is not fully seated — this reduces the corrective effect and increases blister risk.",
  },
  {
    id: "brace_blister_or_redness",
    domain: "brace",
    label: "Possible skin irritation or blister",
    urgency: "monitor",
    color: "amber",
    actionText: "Apply a bandage or moleskin over the blister and continue wearing. Only leave the brace off if there is an open, painful sore. Contact your orthotist — a sock adjustment or pressure saddle often resolves this.",
    description: "Visible redness, skin breakdown, or a blister at the heel or dorsum of the foot. Some initial redness is normal; open blisters or persistent redness need assessment.",
  },
  {
    id: "brace_bar_issue",
    domain: "brace",
    label: "Bar may be bent or detached",
    urgency: "urgent",
    color: "red",
    actionText: "Stop using the brace and contact your orthotist today for a repair or replacement.",
    description: "The bar appears visibly bent, detached from a shoe, or at an unusual angle. A compromised bar cannot maintain the prescribed abduction angle.",
  },

  // Foot / ankle domain
  {
    id: "foot_normal_position",
    domain: "foot",
    label: "Foot position looks normal",
    urgency: "normal",
    color: "emerald",
    actionText: "Foot position looks good. Continue your regular follow-up schedule.",
    description: "The foot appears to be in the expected corrected position for the current treatment phase, with no visible supination or inward rotation.",
  },
  {
    id: "foot_relapse_signs",
    domain: "foot",
    label: "Possible signs of relapse",
    urgency: "urgent",
    color: "red",
    actionText: "Contact your orthopedic provider promptly. Early relapse is treatable — catching it early means fewer casts.",
    description: "The foot appears to be supinating, turning inward, or returning toward the clubfoot position. This warrants prompt evaluation — do not wait for a routine appointment.",
  },
  {
    id: "foot_toe_walking",
    domain: "foot",
    label: "Possible toe walking observed",
    urgency: "monitor",
    color: "amber",
    actionText: "Mention this at your next orthopedic appointment, or call if you're concerned.",
    description: "The child appears to be bearing weight primarily on the toes with the heel elevated. This can be normal in early walkers but may also signal Achilles tightness.",
  },

  // Meta domain
  {
    id: "image_unclear",
    domain: "meta",
    label: "Image too unclear to assess",
    urgency: "meta",
    color: "slate",
    actionText: "Try again with better lighting, closer range, or a steadier hand. The image needs to clearly show the foot, cast, or brace.",
    description: "The image is too blurry, dark, or obscured to make a reliable assessment.",
  },
  {
    id: "no_relevant_anatomy",
    domain: "meta",
    label: "No foot, cast, or brace visible",
    urgency: "meta",
    color: "slate",
    actionText: "Take a photo that clearly shows the foot, cast, or brace you want assessed.",
    description: "The photo doesn't appear to show a foot, cast, or brace. Point the camera directly at the area you want assessed.",
  },
];

// Index by id for fast lookup in components
export const conditionMap = Object.fromEntries(conditions.map((c) => [c.id, c]));
