export interface DashboardProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardProps) {
  return (
    <section>
      {children}
    </section>
  );
}