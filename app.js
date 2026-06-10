const storage = {
  scenario: "researchOutcomesStudio.scenario.v1",
  relationship: "researchOutcomesStudio.relationship.v1",
  cycle: "researchOutcomesStudio.cycle.v1"
};

const viewMeta = {
  orientation: ["Prospective Research Outcomes", "What could the findings make possible?", "Explore potential outcomes, test responsible responses, and trace every recommendation back to evidence."],
  scenarios: ["Scenario Lab", "What if the evidence points somewhere unexpected?", "Stress-test plausible findings without forcing the study toward one preferred conclusion."],
  ecology: ["Ecological Systems Map", "Where could the findings create change?", "Trace immediate classroom effects, institutional leverage, cultural narratives, and change over time."],
  cycle: ["Practice-to-Policy Cycle", "How could a finding become a responsible pilot?", "Move from learning purpose to review without turning a dissertation insight into an unsupported mandate."],
  decision: ["Evidence-to-Action Decision Lab", "How strong should the response be?", "Choose a proportionate next step based on evidence, risk, reversibility, privacy, and equity."],
  dissemination: ["Community Return", "How should findings travel back to the community?", "Match each audience with the product, purpose, boundary, and feedback loop it needs."],
  stewardship: ["Research Stewardship", "What belongs in public scholarship?", "Practice the boundary among public products, de-identified analysis, and private research data."]
};

const commitments = [
  ["Return knowledge", "Participants and practitioner communities receive usable findings, not only requests for data."],
  ["Protect dignity", "Public products use aggregated, de-identified, appropriately bounded material."],
  ["Preserve complexity", "Productive and exclusionary friction remain distinct."],
  ["Match claims", "Recommendations stay proportional to the strength and kind of evidence."],
  ["Treat disagreement as data", "Divergence and contradiction remain visible rather than edited out."]
];

const routes = [
  ["Stress-test a possible finding", "See how convergence, expansion, divergence, or silence changes interpretation.", "scenarios"],
  ["Trace system impact", "Move from classroom experience through district leverage and cultural narratives.", "ecology"],
  ["Design a pilot", "Walk through the six-phase practice-to-policy cycle.", "cycle"],
  ["Choose a response", "Use evidence strength, risk, reversibility, privacy, and equity.", "decision"],
  ["Return findings", "Plan audience-specific public products and feedback loops.", "dissemination"],
  ["Protect the boundary", "Practice what can and cannot belong on GitHub Pages.", "stewardship"]
];

const chainDetails = {
  finding: "<strong>Responsibility:</strong> Describe what the evidence shows without collapsing disagreement. <strong>Failure mode:</strong> treating a memorable quote or significant result as the whole finding.",
  interpretation: "<strong>Responsibility:</strong> Explain the conditions and alternative meanings that could account for the finding. <strong>Failure mode:</strong> presenting the researcher's preferred explanation as self-evident.",
  response: "<strong>Responsibility:</strong> Match the action to the evidence, affected community, risk, and ecological level. <strong>Failure mode:</strong> moving from an interesting theme to a universal policy.",
  evaluation: "<strong>Responsibility:</strong> Identify what improvement, harm, equity, and implementation would look like. <strong>Failure mode:</strong> measuring adoption or polished outputs as proof of success."
};

const relationships = {
  convergence: {
    label: "Convergence",
    detail: "Multiple sources support a similar interpretation. A bounded pilot may be appropriate when risk is low and the response is reversible."
  },
  expansion: {
    label: "Expansion",
    detail: "One source adds depth, scale, or a different perspective. The response should preserve the added complexity rather than flatten it."
  },
  divergence: {
    label: "Divergence",
    detail: "Sources or groups conflict. The explanation of that disagreement may be the most important finding, so co-design and differentiated responses are preferable."
  },
  silence: {
    label: "Silence",
    detail: "A source does not address the expected issue. Treat the absence carefully; it may reflect measurement, context, priority, or a genuinely weak relationship."
  }
};

const scenarios = [
  {
    id: "policy-usability",
    type: "Institutional condition",
    title: "Policy exists. Practice still feels unsupported.",
    qual: "Educators describe uncertainty about what learning-centered AI use looks like in daily instruction.",
    quan: "Documents show a written AI policy and formal guidance are present.",
    interpretation: "Policy presence may not equal policy usability.",
    response: "Shift from compliance language toward examples, professional learning, and implementation support.",
    action: "Pilot role-based policy interpretation sessions and test whether educators can apply the guidance to realistic instructional cases.",
    limit: "This would not justify claiming that written policy is irrelevant or ineffective in every district.",
    question: "What separates a policy that exists from a policy that educators can actually use?",
    system: "district"
  },
  {
    id: "access-benefit",
    type: "Equity and learning",
    title: "AI removes exclusionary barriers more often than expected.",
    qual: "Participants describe translation, planning, and communication support that expands meaningful participation.",
    quan: "Survey patterns show frequent use of AI for access-oriented support.",
    interpretation: "The study's initial risk emphasis may be incomplete.",
    response: "Rebalance the framework and identify conditions that preserve learning while expanding access.",
    action: "Co-design safeguards that protect access benefits and restore visible evidence of reasoning where needed.",
    limit: "This would not justify assuming that every accessibility-oriented use supports learning or that all risks disappear.",
    question: "When does reducing friction expand access without making the learning target optional?",
    system: "relationships"
  },
  {
    id: "dimensions-overlap",
    type: "Framework refinement",
    title: "Educators recognize the problem but not the four dimensions.",
    qual: "Participants describe authorship, explanation, and thinking as one interconnected concern.",
    quan: "Survey items do not separate cleanly into the theorized dimensions.",
    interpretation: "The framework may be useful while its four-part structure is too complex or overlapping.",
    response: "Simplify practitioner language and revise the framework to fit the evidence.",
    action: "Test a smaller practitioner-facing vocabulary before creating professional learning or policy tools.",
    limit: "This would not prove that the underlying concepts are meaningless or that the framework has no scholarly value.",
    question: "Which distinctions improve professional judgment, and which distinctions add avoidable complexity?",
    system: "culture"
  },
  {
    id: "informal-adaptation",
    type: "Professional judgment",
    title: "Teachers adapt thoughtfully even where formal policy is weak.",
    qual: "Teachers describe locally developed routines for explanation, revision, dialogue, and disclosure.",
    quan: "Formal policy or professional-learning access appears limited.",
    interpretation: "Informal communities of practice may compensate for institutional gaps.",
    response: "Study and support practitioner-developed strategies while addressing uneven access to them.",
    action: "Create voluntary practice exchanges and examine which routines transfer across contexts.",
    limit: "This would not justify leaving educators to solve system-level problems without institutional support.",
    question: "How can systems learn from teacher judgment without exploiting it as unpaid infrastructure?",
    system: "relationships"
  },
  {
    id: "learner-divergence",
    type: "Perspective divergence",
    title: "Learner accounts conflict with educator concerns.",
    qual: "Educators describe reduced struggle, while adult students describe new forms of verification, revision, and choice.",
    quan: "Broad survey patterns do not explain the difference in perspective.",
    interpretation: "Adults and learners may experience the same media transition differently.",
    response: "Treat the disagreement as central and avoid making policy from adult perception alone.",
    action: "Create structured dialogue around the same task examples and compare what each group sees as learning.",
    limit: "This would not establish that learner self-report is more accurate than educator observation.",
    question: "What becomes visible when those who design learning and those who experience it interpret AI differently?",
    system: "classroom"
  },
  {
    id: "weak-survey",
    type: "Mixed methods divergence",
    title: "Survey patterns are weak while interviews reveal strong differences.",
    qual: "Interviews reveal highly contextual relationships among task design, policy, access, and teacher judgment.",
    quan: "Survey relationships are weak or statistically non-significant.",
    interpretation: "The phenomenon may be relational, local, or poorly captured by the instrument.",
    response: "Prioritize qualitative explanation, revise measures, and avoid population-level claims.",
    action: "Use small reversible pilots and improve the instrument before broader use.",
    limit: "This would not justify claiming that no relationship exists or that quantitative evidence is unhelpful.",
    question: "What is the survey flattening that participants can explain in conversation?",
    system: "time"
  },
  {
    id: "framework-unsupported",
    type: "Disconfirming outcome",
    title: "Neither strand supports the framework.",
    qual: "Participant reasoning does not map meaningfully onto the framework's concepts.",
    quan: "Survey and document patterns do not support the expected relationships.",
    interpretation: "The framework may not be useful in its current form or in the studied context.",
    response: "Report the result honestly, revise or abandon unsupported claims, and identify better concepts.",
    action: "Return to emergent participant language and define a future research agenda before designing interventions.",
    limit: "This would not erase the value of the inquiry or prove that the framework can never be useful elsewhere.",
    question: "What becomes possible when the study is allowed to change the theory rather than confirm it?",
    system: "culture"
  },
  {
    id: "strong-support",
    type: "Strong support",
    title: "The framework resonates across roles and sources.",
    qual: "Educators and leaders use the framework to explain recurring instructional and institutional dilemmas.",
    quan: "Exploratory patterns align with the framework's expected relationships.",
    interpretation: "The framework may have practical resonance within the study's boundaries.",
    response: "Develop cautious pilots, pursue replication, and keep claims bounded.",
    action: "Pilot the practice-to-policy cycle with a partner community and evaluate unintended effects.",
    limit: "This would not justify a universal mandate, a validated scale claim, or identical use across contexts.",
    question: "How can strong support lead to careful experimentation rather than premature certainty?",
    system: "district"
  }
];

const systems = {
  classroom: {
    title: "Classroom",
    description: "The immediate setting where tasks, explanation, dialogue, authorship, feedback, and AI use are experienced.",
    shapes: "Task design, teacher-student interaction, peer dialogue, assessment evidence, and daily use of support tools.",
    response: "Redesign selected tasks to preserve evidence of reasoning while removing irrelevant barriers.",
    equity: "Check whether the redesign expands access or quietly makes participation harder for some learners.",
    limit: "Classroom findings do not by themselves explain the district conditions that make practices sustainable."
  },
  relationships: {
    title: "Relationships",
    description: "The connections among classrooms, families, leaders, support teams, curriculum staff, and technology teams.",
    shapes: "Expectation coherence, family understanding, accessibility support, professional learning, and cross-role trust.",
    response: "Create shared cases and language that let groups interpret difficult AI-use decisions together.",
    equity: "Include multilingual learning, disability, special education, and family perspectives before standardizing a response.",
    limit: "Relational coherence cannot compensate indefinitely for weak policy, time, staffing, or governance."
  },
  district: {
    title: "District",
    description: "The exosystem that shapes classroom conditions through policy, procurement, leadership, assessment systems, privacy, time, and resources.",
    shapes: "What educators are permitted, prepared, resourced, and supported to do.",
    response: "Align policy usability, professional learning, assessment support, vendor review, and leadership expectations.",
    equity: "Ask whether scalable automation is replacing human-rich support in under-resourced settings.",
    limit: "District policy cannot determine the meaning of every classroom use or replace professional judgment."
  },
  culture: {
    title: "Culture",
    description: "Broader narratives about efficiency, rigor, innovation, authorship, access, and what counts as learning.",
    shapes: "Which outcomes are valued, which risks are visible, and whether polished output is mistaken for understanding.",
    response: "Use public scholarship and community dialogue to challenge false binaries and make the learning purpose visible.",
    equity: "Interrogate whose definitions of rigor, authorship, and acceptable support become institutional norms.",
    limit: "A cultural argument should not be presented as proof of local practice or participant experience."
  },
  time: {
    title: "Time",
    description: "The rapidly changing technological and policy environment in which findings, tools, and practices may age quickly.",
    shapes: "Tool capability, participant attitudes, policy relevance, implementation maturity, and future research needs.",
    response: "Use durable principles, scheduled review, and reversible pilots rather than model-specific permanent rules.",
    equity: "Monitor whether changing tools widen access and guidance gaps across communities.",
    limit: "A finding from one technological moment should not be treated as permanently settled."
  }
};

const cyclePhases = [
  {
    title: "Identify the learning purpose",
    description: "Select a small number of tasks or decisions and define what students should know, explain, revise, transfer, or defend.",
    prompts: ["What learning is the task designed to develop?", "What evidence would demonstrate understanding?", "Which visible product features could be misleading?"],
    completion: "Can the team state the intended learning without referring only to task completion or product polish?"
  },
  {
    title: "Conduct a friction audit",
    description: "Identify noetic, rhetorical, existential, and infrastructural friction, then classify each as productive, exclusionary, mixed, or uncertain.",
    prompts: ["What cognitive work should remain with the learner?", "Where does dialogue or accountability matter?", "Which barriers do not serve the learning goal?"],
    completion: "Has the team named both productive struggle and barriers that should be removed?"
  },
  {
    title: "Redesign the task or environment",
    description: "Decide what to preserve, remove, or redesign through checkpoints, explanation, revision, dialogue, disclosure, access support, or alternative demonstrations.",
    prompts: ["What should AI support?", "What should remain visible as human reasoning?", "How will students explain or stand behind the work?"],
    completion: "Does the redesign improve evidence of learning without creating unnecessary barriers?"
  },
  {
    title: "Align institutional supports",
    description: "Identify the policy, time, professional learning, rubric, tool, privacy, communication, and leadership support needed to sustain the practice.",
    prompts: ["What does the educator need from the system?", "Which current policies conflict?", "What privacy or vendor conditions matter?"],
    completion: "Could the practice survive beyond one committed teacher or isolated classroom?"
  },
  {
    title: "Pilot and collect evidence",
    description: "Test the intervention at small scale and gather evidence about explanation, revision, ownership, access, fairness, workload, and unintended effects.",
    prompts: ["What will count as improvement?", "Whose experience must be monitored?", "What harm or workaround might emerge?"],
    completion: "Is the pilot small, reversible, measurable, and attentive to unintended consequences?"
  },
  {
    title: "Review, revise, and decide",
    description: "Use evidence and community interpretation to expand, revise, pause, or discontinue the intervention.",
    prompts: ["What converged or diverged?", "What changed for different groups?", "What should be stopped or redesigned?"],
    completion: "Can the team explain why the response should expand, change, pause, or end?"
  }
];

const audiences = [
  {
    id: "participants",
    type: "First return",
    title: "Participants and participating communities",
    need: "A concise, recognizable, respectful account of major patterns, disagreements, limitations, privacy protections, and future public products.",
    product: "Participant and community findings brief",
    purpose: "Return useful knowledge and invite reflection on de-identified themes.",
    boundary: "No identifiable quotes, institutional vulnerabilities, raw responses, or claims beyond the study.",
    feedback: "Member reflection or an approved response process documenting what feels accurate, incomplete, surprising, or harmful."
  },
  {
    id: "educators",
    type: "Practice translation",
    title: "Classroom educators and instructional coaches",
    need: "Usable language and realistic cases for deciding when AI supports access and when it bypasses learning.",
    product: "Educator practice guide and professional learning workshop",
    purpose: "Support task design, assessment, disclosure, dialogue, and evidence of reasoning.",
    boundary: "Avoid universal rules, surveillance practices, and claims that one strategy fits every learner or subject.",
    feedback: "Pilot cases, collect implementation stories, and revise examples based on practitioner judgment."
  },
  {
    id: "leaders",
    type: "Governance translation",
    title: "District leaders, boards, and cross-functional teams",
    need: "A connection among governance, assessment, professional learning, procurement, privacy, and equitable support.",
    product: "District leadership executive brief and policy review protocol",
    purpose: "Align system conditions with learning-centered AI use.",
    boundary: "Do not present exploratory findings as population estimates or turn a framework into an immediate mandate.",
    feedback: "Use policy usability sessions and cross-functional review before formal adoption."
  },
  {
    id: "families",
    type: "Public explanation",
    title: "Students, families, and community stakeholders",
    need: "Plain-language explanations of what schools are trying to protect, enable, and learn.",
    product: "Public web companion, family brief, and community dialogue materials",
    purpose: "Build shared understanding beyond cheating-versus-innovation binaries.",
    boundary: "Do not expose participant stories or use technical framework language without explanation.",
    feedback: "Invite questions about fairness, access, expectations, trust, and student responsibility."
  },
  {
    id: "researchers",
    type: "Scholarly contribution",
    title: "Researchers and professional organizations",
    need: "Transparent methods, limitations, theoretical revision, contradictory evidence, and a future research agenda.",
    product: "Dissertation chapters, conference presentations, and scholarly publications",
    purpose: "Contribute bounded findings and invite replication or critique.",
    boundary: "Do not overclaim generalizability, validation, causal effects, or stable conclusions in a rapidly changing field.",
    feedback: "Use peer review, replication, comparative studies, and instrument refinement."
  }
];

const disseminationStages = ["Participant return", "Practitioner sensemaking", "District governance translation", "Public scholarship", "Continued learning"];

const dataItems = [
  {
    id: "public-map",
    title: "Conceptual map of the Pedagogical Friction Framework",
    description: "A researcher-created visual explaining concepts without participant responses.",
    classification: "public",
    explanation: "This is appropriate for public explanation when it contains no private notes, copyrighted source extracts, or implied findings."
  },
  {
    id: "theme-summary",
    title: "De-identified cross-role theme summary",
    description: "An analytic summary reviewed for disclosure risk but still containing contextual detail.",
    classification: "deidentified",
    explanation: "This belongs in restricted analysis until it has been further bounded and approved for a public product."
  },
  {
    id: "raw-transcript",
    title: "Raw interview transcript",
    description: "A participant's complete response file, including potentially identifying details.",
    classification: "private",
    explanation: "Raw transcripts are private research data and belong only in the approved secure storage environment."
  },
  {
    id: "public-brief",
    title: "Aggregated community findings brief",
    description: "A public-facing summary containing approved, de-identified, appropriately bounded findings.",
    classification: "public",
    explanation: "This is designed for public dissemination after final review for privacy, accuracy, and claim boundaries."
  },
  {
    id: "joint-display",
    title: "Detailed internal joint display",
    description: "A working integration table connecting coded excerpts, survey results, and researcher interpretations.",
    classification: "deidentified",
    explanation: "Even without names, a detailed joint display may reveal participants or institutions and should remain restricted until disclosure risk is reviewed."
  },
  {
    id: "consent-record",
    title: "Consent and participant contact record",
    description: "A record connecting a participant's identity with study participation.",
    classification: "private",
    explanation: "Consent and contact records are private research data and must never be stored in a public repository."
  }
];

let activeScenarioId = localStorage.getItem(storage.scenario) || scenarios[0].id;
let activeRelationship = localStorage.getItem(storage.relationship) || "divergence";
let activeSystem = scenarios.find(item => item.id === activeScenarioId)?.system || "district";
let activeCyclePhase = 0;
let activeAudienceId = audiences[0].id;
let activeDataItemId = dataItems[0].id;

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function showView(viewName) {
  qsa(".view").forEach(view => view.classList.toggle("active", view.id === `view-${viewName}`));
  qsa(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.view === viewName));
  const [label, title, description] = viewMeta[viewName];
  qs("#viewLabel").textContent = label;
  qs("#viewTitle").textContent = title;
  qs("#viewDescription").textContent = description;
  window.location.hash = viewName;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderOrientation() {
  qs("#commitmentList").innerHTML = commitments.map(([title, text]) => `<article><strong>${title}</strong><p>${text}</p></article>`).join("");
  qs("#routeGrid").innerHTML = routes.map(([title, text, view]) => `<button type="button" data-go="${view}"><strong>${title}</strong><span>${text}</span></button>`).join("");
}

function getActiveScenario() {
  return scenarios.find(item => item.id === activeScenarioId) || scenarios[0];
}

function renderScenarios() {
  qs("#scenarioList").innerHTML = scenarios.map(item => `
    <button type="button" class="${item.id === activeScenarioId ? "active" : ""}" data-scenario="${item.id}">
      <strong>${item.title}</strong>
      <span>${item.type}</span>
    </button>
  `).join("");
  qs("#relationshipButtons").innerHTML = Object.entries(relationships).map(([key, item]) => `
    <button type="button" class="${key === activeRelationship ? "active" : ""}" data-relationship="${key}">${item.label}</button>
  `).join("");
  const item = getActiveScenario();
  qs("#scenarioType").textContent = item.type;
  qs("#scenarioTitle").textContent = item.title;
  qs("#qualSignal").textContent = item.qual;
  qs("#quanSignal").textContent = item.quan;
  qs("#relationshipCore").textContent = relationships[activeRelationship].label;
  qs("#scenarioInterpretation").textContent = item.interpretation;
  qs("#relationshipInterpretation").textContent = relationships[activeRelationship].detail;
  qs("#scenarioResponse").textContent = item.response;
  qs("#scenarioAction").textContent = item.action;
  qs("#scenarioLimit").textContent = item.limit;
  qs("#scenarioQuestion").textContent = item.question;
  renderEcologyScenarioOptions();
}

function renderEcologyScenarioOptions() {
  qs("#ecologyScenarioSelect").innerHTML = scenarios.map(item => `<option value="${item.id}" ${item.id === activeScenarioId ? "selected" : ""}>${item.title}</option>`).join("");
  qs("#ecologyCenterText").textContent = getActiveScenario().title;
}

function renderSystem() {
  qsa(".ecology-ring").forEach(button => button.classList.toggle("active", button.dataset.system === activeSystem));
  const system = systems[activeSystem];
  qs("#systemTitle").textContent = system.title;
  qs("#systemDescription").textContent = system.description;
  qs("#systemShapes").textContent = system.shapes;
  qs("#systemResponse").textContent = system.response;
  qs("#systemEquity").textContent = system.equity;
  qs("#systemLimit").textContent = system.limit;
}

function getCycleReviews() {
  return JSON.parse(localStorage.getItem(storage.cycle) || "{}");
}

function renderCycle() {
  const reviews = getCycleReviews();
  qs("#cycleTrack").innerHTML = cyclePhases.map((phase, index) => `
    <button type="button" class="${index === activeCyclePhase ? "active" : ""} ${reviews[index] ? "reviewed" : ""}" data-phase="${index}">
      <span>Phase ${index + 1}</span>
      <strong>${phase.title}</strong>
    </button>
  `).join("");
  const phase = cyclePhases[activeCyclePhase];
  qs("#cyclePhaseLabel").textContent = `Phase ${activeCyclePhase + 1}`;
  qs("#cyclePhaseTitle").textContent = phase.title;
  qs("#cyclePhaseDescription").textContent = phase.description;
  qs("#cyclePrompts").innerHTML = phase.prompts.map(prompt => `<article>${prompt}</article>`).join("");
  qs("#cycleCompletion").textContent = phase.completion;
  qs("#phaseReviewed").checked = Boolean(reviews[activeCyclePhase]);
  const completed = Object.values(reviews).filter(Boolean).length;
  qs("#cycleProgressValue").textContent = `${completed} / ${cyclePhases.length}`;
  qs("#cycleProgressBar").style.width = `${(completed / cyclePhases.length) * 100}%`;
}

function renderDecision() {
  const condition = qs("#evidenceCondition").value;
  const risk = qs("#riskLevel").value;
  const reversible = qs("#reversibility").value;
  const privacy = qs("#privacyConcern").checked;
  const equity = qs("#equityTension").checked;

  let posture = "Pilot and evaluate";
  let summary = "The evidence supports a small, reversible, monitored response rather than a permanent rule.";
  const steps = [];

  if (privacy) {
    posture = "Pause for governance review";
    summary = "A privacy, surveillance, or discrimination concern requires formal review before implementation.";
    steps.push("Stop transmission or deployment", "Conduct privacy and governance review", "Engage affected groups", "Proceed only with approved safeguards");
  } else if (condition === "contradiction") {
    posture = "Revise the framework first";
    summary = "A response built on a contradicted framework would outrun the evidence. Return to participant language and emergent concepts.";
    steps.push("Audit interpretation", "Revise or narrow the framework", "Return to community interpretation", "Define a future research question");
  } else if (condition === "divergent") {
    posture = "Co-design differentiated responses";
    summary = "Divergent findings call for explanation and multiple perspectives, not one universal rule.";
    steps.push("Make disagreement visible", "Identify contextual differences", "Co-design bounded responses", "Compare effects across groups");
  } else if (condition === "quantitative") {
    posture = "Investigate meaning before acting";
    summary = "A pattern without contextual explanation is useful for inquiry, but not yet for broad policy.";
    steps.push("Verify the pattern", "Gather qualitative explanation", "Assess practical importance", "Decide whether a pilot is justified");
  } else if (condition === "weak") {
    posture = "Monitor and gather more evidence";
    summary = "Weak, mixed, or time-sensitive evidence supports reversible monitoring and small tests, not system-wide change.";
    steps.push("Clarify uncertainty", "Choose low-risk observation", "Gather better evidence", "Revisit the decision");
  } else if (condition === "qualitative") {
    posture = "Use as contextual practice guidance";
    summary = "Strong qualitative evidence can guide local reflection and practice, but it should not be presented as prevalence.";
    steps.push("Describe context", "Share bounded practice guidance", "Avoid population claims", "Gather implementation feedback");
  } else {
    steps.push("Define a bounded pilot", "Set equity and learning measures", "Monitor unintended effects", "Review, revise, or stop");
  }

  if (risk === "high" || reversible === "hard") {
    posture = privacy ? posture : "Require stronger evidence before acting";
    summary += " The response is high-risk or hard to reverse, so a stronger evidence threshold and broader deliberation are necessary.";
  }

  if (equity) {
    summary += " Because an equity benefit and learning risk occur together, the response should preserve access while restoring evidence of learning.";
    steps.unshift("Name the access benefit and learning risk");
  }

  qs("#decisionPosture").textContent = posture;
  qs("#decisionSummary").textContent = summary;
  qs("#decisionPath").innerHTML = steps.slice(0, 4).map((step, index) => `<article><span>Step ${index + 1}</span><strong>${step}</strong></article>`).join("");
  const scenario = getActiveScenario();
  qs("#actionBrief").value = `Possible finding: ${scenario.title}\n\nRecommended posture: ${posture}\n\nRationale: ${summary}\n\nProposed next step: ${scenario.action}\n\nEvidence limit: ${scenario.limit}\n\nThis is a prospective planning brief, not a report of dissertation findings.`;
}

function renderAudiences() {
  qs("#audienceList").innerHTML = audiences.map(item => `
    <button type="button" class="${item.id === activeAudienceId ? "active" : ""}" data-audience="${item.id}">
      <strong>${item.title}</strong>
      <span>${item.type}</span>
    </button>
  `).join("");
  const audience = audiences.find(item => item.id === activeAudienceId) || audiences[0];
  qs("#audienceType").textContent = audience.type;
  qs("#audienceTitle").textContent = audience.title;
  qs("#audienceNeed").textContent = audience.need;
  qs("#audienceProduct").textContent = audience.product;
  qs("#audiencePurpose").textContent = audience.purpose;
  qs("#audienceBoundary").textContent = audience.boundary;
  qs("#audienceFeedback").textContent = audience.feedback;
  qs("#disseminationSequence").innerHTML = disseminationStages.map((stage, index) => `<article><strong>${index + 1}. ${stage}</strong></article>`).join("");
}

function renderDataItems() {
  qs("#dataItemList").innerHTML = dataItems.map(item => `
    <button type="button" class="${item.id === activeDataItemId ? "active" : ""}" data-data-item="${item.id}">
      <strong>${item.title}</strong>
      <span>Classify this material</span>
    </button>
  `).join("");
  const item = dataItems.find(entry => entry.id === activeDataItemId) || dataItems[0];
  qs("#dataItemTitle").textContent = item.title;
  qs("#dataItemDescription").textContent = item.description;
  qs("#classificationFeedback").className = "classification-feedback";
  qs("#classificationFeedback").textContent = "Choose the most responsible location for the selected material.";
}

function bindEvents() {
  qsa(".nav-item").forEach(button => button.addEventListener("click", () => showView(button.dataset.view)));
  qsa("[data-view-link]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    showView(link.dataset.viewLink);
  }));
  document.addEventListener("click", event => {
    const go = event.target.closest("[data-go]");
    if (go) showView(go.dataset.go);
  });

  qs("#printView").addEventListener("click", () => window.print());

  qs(".action-chain").addEventListener("click", event => {
    const button = event.target.closest("[data-chain]");
    if (!button) return;
    qsa("[data-chain]").forEach(item => item.classList.toggle("active", item === button));
    qs("#chainDetail").innerHTML = chainDetails[button.dataset.chain];
  });

  qs("#scenarioList").addEventListener("click", event => {
    const button = event.target.closest("[data-scenario]");
    if (!button) return;
    activeScenarioId = button.dataset.scenario;
    activeSystem = getActiveScenario().system;
    localStorage.setItem(storage.scenario, activeScenarioId);
    renderScenarios();
    renderSystem();
    renderDecision();
  });

  qs("#relationshipButtons").addEventListener("click", event => {
    const button = event.target.closest("[data-relationship]");
    if (!button) return;
    activeRelationship = button.dataset.relationship;
    localStorage.setItem(storage.relationship, activeRelationship);
    renderScenarios();
  });

  qs("#ecologyScenarioSelect").addEventListener("change", event => {
    activeScenarioId = event.target.value;
    activeSystem = getActiveScenario().system;
    localStorage.setItem(storage.scenario, activeScenarioId);
    renderScenarios();
    renderSystem();
    renderDecision();
  });

  qs("#ecologyMap").addEventListener("click", event => {
    const button = event.target.closest("[data-system]");
    if (!button) return;
    activeSystem = button.dataset.system;
    renderSystem();
  });

  qs("#cycleTrack").addEventListener("click", event => {
    const button = event.target.closest("[data-phase]");
    if (!button) return;
    activeCyclePhase = Number(button.dataset.phase);
    renderCycle();
  });

  qs("#phaseReviewed").addEventListener("change", event => {
    const reviews = getCycleReviews();
    reviews[activeCyclePhase] = event.target.checked;
    localStorage.setItem(storage.cycle, JSON.stringify(reviews));
    renderCycle();
  });

  qs("#decisionForm").addEventListener("submit", event => {
    event.preventDefault();
    renderDecision();
  });
  ["#evidenceCondition", "#riskLevel", "#reversibility", "#privacyConcern", "#equityTension"].forEach(selector => {
    qs(selector).addEventListener("change", renderDecision);
  });

  qs("#copyBrief").addEventListener("click", async () => {
    const text = qs("#actionBrief").value;
    try {
      await navigator.clipboard.writeText(text);
      qs("#copyStatus").textContent = "Copied locally.";
    } catch {
      qs("#actionBrief").select();
      qs("#copyStatus").textContent = "Select and copy the highlighted brief.";
    }
  });

  qs("#audienceList").addEventListener("click", event => {
    const button = event.target.closest("[data-audience]");
    if (!button) return;
    activeAudienceId = button.dataset.audience;
    renderAudiences();
  });

  qs("#dataItemList").addEventListener("click", event => {
    const button = event.target.closest("[data-data-item]");
    if (!button) return;
    activeDataItemId = button.dataset.dataItem;
    renderDataItems();
  });

  qs("#classificationOptions").addEventListener("click", event => {
    const button = event.target.closest("[data-classification]");
    if (!button) return;
    const item = dataItems.find(entry => entry.id === activeDataItemId) || dataItems[0];
    const correct = button.dataset.classification === item.classification;
    qs("#classificationFeedback").className = `classification-feedback ${correct ? "correct" : "incorrect"}`;
    qs("#classificationFeedback").innerHTML = `<strong>${correct ? "Responsible classification." : "Reconsider this boundary."}</strong> ${item.explanation}`;
  });
}

function init() {
  renderOrientation();
  renderScenarios();
  renderSystem();
  renderCycle();
  renderDecision();
  renderAudiences();
  renderDataItems();
  bindEvents();
  const requestedView = window.location.hash.replace("#", "");
  showView(viewMeta[requestedView] ? requestedView : "orientation");
}

init();
