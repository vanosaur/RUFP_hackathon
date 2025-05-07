import { SystemArchtypes } from "@/components/systems_archetype";

export default function CLDPage() {
  const variables = [
    "Peer Pressure",
    "Mimetic Desires",
    "Online Validation",
    "Dopamine Hit",
    "Expectation of Reward",
    "Social Media Usage",
    "More Social Media Content",
    "Internet Access",
    "Time Spent on Devices",
    "Sleep Quality",
    "Offline Interaction",
    "Loneliness",
    "Mental Health Issues",
    "Strict Measures",
    "Parental Supervision",
    "Self Realization"
]
  return (
    <div className="flex flex-col justify-center items-center align-center">
      <div className="border-b">
        <div className="container py-10">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Causal Loop Diagram Analysis</h1>
          <p className="text-muted-foreground">
            Visualize and understand the system dynamics of screen addiction.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 ml-40">
      {variables.map((variable, index) => (
        <span
          key={index}
          id={`variable${index + 1}`}
          className="bg-blue-100 text-blue-800 text-sm font-medium rounded-full px-3 py-1"
        >
          {variable}
        </span>
      ))}
    </div>

      <div className="container py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-2xl space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">Causal Loop Diagram Analysis</h1>

      {/* Reinforcing Loops */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600">🔁 Reinforcing Loops (Positive Feedback)</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-800">
          <li>
            <strong>R1 – Reward Loop:</strong> Expectation of Reward → Social Media Usage → Dopamine Hit → Reinforces Expectation of Reward.
          </li>
          <li>
            <strong>R2 – Loneliness Loop:</strong> Social Media Usage ↑ → Time on Devices ↑ → Offline Interaction ↓ → Loneliness ↑ → Social Media Usage ↑.
          </li>
          <li>
            <strong>R3 – Mimetic & Validation Loop:</strong> Peer Pressure ↑ → Mimetic Desires ↑ → Online Validation ↑ → Social Media Usage ↑ → More Content ↑ → Peer Pressure ↑.
          </li>
        </ul>
      </section>

      {/* Balancing Loops */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600">🔃 Balancing Loops (Negative Feedback)</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-800">
          <li>
            <strong>B1 – Regulatory Loop:</strong> Social Media Usage ↑ → Mental Health Issues ↑ → Strict Measures ↑ → Social Media Usage ↓.
          </li>
          <li>
            <strong>B2 – Supervision & Realization Loop:</strong> Mental Health Issues ↑ → Parental Supervision ↑ → Self Realization ↑ → Social Media Usage ↓.
          </li>
        </ul>
      </section>

      {/* Other Relationships */}
      <section>
        <h2 className="text-2xl font-semibold text-purple-600">🔗 Other Key Relationships</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Time on Devices ↑ → Sleep Quality ↓ → Mental Health Issues ↑</li>
          <li>Time on Devices ↑ → Offline Interaction ↓ → Loneliness ↑</li>
          <li><strong>S:</strong> Same-direction influence (↑ A → ↑ B)</li>
          <li><strong>O:</strong> Opposite-direction influence (↑ A → ↓ B)</li>
        </ul>
      </section>

      {/* Interpretation */}
      <section>
        <h2 className="text-2xl font-semibold text-red-600">🧠 Interpretation</h2>
        <p className="text-gray-800">
          The diagram highlights how social media addiction is a complex system involving reinforcing feedback loops
          (peer pressure, dopamine rewards, loneliness) and balancing loops (supervision, self-awareness, strict measures).
          Effective intervention must address root causes like validation seeking and isolation, not just behavior.
        </p>
      </section>
    </div>
        
        <div className="mt-12">
        <SystemArchtypes />
      </div>
      </div>
    </div>
  );
}