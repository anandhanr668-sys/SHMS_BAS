import { FormSchema, FormType } from '../../../types/forms';

export const FERTILITY_SCHEMAS: Record<string, FormSchema> = {
  [FormType.ANTENATAL]: {
    type: FormType.ANTENATAL,
    title: "Booking Visit -- Antenatal Record",
    sections: [
      {
        id: "visit_details",
        title: "Visit Details",
        enabled: true,
        fields: [
          { id: "occupation", label: "Occupation", type: "text", section: "visit_details", enabled: true, name: "occupation" },
          { id: "place", label: "Place", type: "text", section: "visit_details", enabled: true, name: "place" },
          { id: "reference", label: "Reference", type: "text", section: "visit_details", enabled: true, name: "reference" }
        ]
      },
      {
        id: "obs_status",
        title: "Chief Complaints & Obstetric Status",
        enabled: true,
        fields: [
          { id: "obs_score", label: "Obstetric Score", type: "text", section: "obs_status", enabled: true, placeholder: "G:0, P:0, L:0...", name: "obs_score" },
          { id: "lmp", label: "LMP", type: "date", section: "obs_status", enabled: true, name: "lmp" },
          { id: "pog", label: "POG (weeks)", type: "number", section: "obs_status", enabled: true, name: "pog" },
          { id: "cycles", label: "Cycles", type: "select", options: ["Regular", "Irregular"], section: "obs_status", enabled: true, name: "cycles" }
        ]
      },
      {
        id: "symptoms",
        title: "1st Trimester Symptoms",
        enabled: true,
        fields: [
          { id: "nausea", label: "Nausea", type: "select", options: ["No", "Yes"], section: "symptoms", enabled: true, name: "nausea" },
          { id: "vomiting", label: "Vomiting", type: "select", options: ["No", "Yes"], section: "symptoms", enabled: true, name: "vomiting" },
          { id: "bleeding", label: "Bleeding/Spotting", type: "select", options: ["No", "Yes"], section: "symptoms", enabled: true, name: "bleeding" }
        ]
      }
    ]
  },
  [FormType.IUI_PLAN]: {
    type: FormType.IUI_PLAN,
    title: "Ovulation Induction + IUI Cycle Plan",
    sections: [
      {
        id: "baseline",
        title: "Baseline Scan Details",
        enabled: true,
        fields: [
          { id: "day2_uterus", label: "Day 2/3 Scan: Uterus", type: "text", section: "baseline", enabled: true, name: "day2_uterus" },
          { id: "et_mm", label: "ET (mm)", type: "number", section: "baseline", enabled: true, name: "et_mm" },
          { id: "rt_ovary", label: "RT Ovary AFC", type: "text", section: "baseline", enabled: true, name: "rt_ovary" }
        ]
      }
    ]
  },
  [FormType.SEMEN_ANALYSIS]: {
    type: FormType.SEMEN_ANALYSIS,
    title: "Semen Analysis Report",
    sections: [
      {
        id: "macro",
        title: "Macroscopic Examination",
        enabled: true,
        fields: [
          { id: "volume", label: "Volume (ml)", type: "number", section: "macro", enabled: true, name: "volume" },
          { id: "appearance", label: "Appearance", type: "text", section: "macro", enabled: true, name: "appearance" },
          { id: "ph", label: "pH", type: "text", section: "macro", enabled: true, name: "ph" }
        ]
      },
      {
        id: "micro",
        title: "Microscopic Examination",
        enabled: true,
        fields: [
          { id: "conc", label: "Concentration (mill/ml)", type: "number", section: "micro", enabled: true, name: "conc" },
          { id: "motility", label: "Total Motile Progressive (%)", type: "number", section: "micro", enabled: true, name: "motility" }
        ]
      }
    ]
  }
};
