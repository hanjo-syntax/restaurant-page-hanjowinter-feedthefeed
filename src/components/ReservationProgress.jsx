export default function ReservationProgress({ currentStep }) {
  const steps = ['Slot', 'Crew', 'Zone'];

  return (
    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-zinc-500" aria-label="Reservierungsfortschritt">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber <= currentStep;

        return (
          <div key={step} className="flex items-center gap-2">
            <span className={`grid h-7 w-7 place-items-center rounded-full border ${isActive ? 'border-cyan-400 bg-cyan-400 text-zinc-950' : 'border-zinc-700'}`}>
              {stepNumber}
            </span>
            <span className={isActive ? 'text-cyan-300' : ''}>{step}</span>
            {index < steps.length - 1 && <span className="mx-1 h-px w-5 bg-zinc-700 sm:w-12" />}
          </div>
        );
      })}
    </div>
  );
}
