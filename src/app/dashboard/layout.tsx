import * as React from 'react';
import DashboardBasePage from "@/components/DashboardBasePage/DashboardBasePage";

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return (
    <DashboardBasePage>
      {props.children}
    </DashboardBasePage>
  )
}