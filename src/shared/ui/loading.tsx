export function Loading() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="flex gap-2">
        <span className="w-3 h-3 rounded-full bg-primary animate-bounce" />
        <span
          className="w-3 h-3 rounded-full bg-primary animate-bounce"
          style={{ animationDelay: "0.15s" }}
        />
        <span
          className="w-3 h-3 rounded-full bg-primary animate-bounce"
          style={{ animationDelay: "0.3s" }}
        />
      </div>
    </div>
  );
}