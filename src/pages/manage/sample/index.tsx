import { MainLayout } from "@khlug/common-module";
import type { MenuItem } from "@khlug/common-module";

const menuItems: MenuItem[] = [];

function SampleManagePage() {
  return (
    <MainLayout menuItems={menuItems}>
      <div>SampleManagePage</div>
    </MainLayout>
  );
}

export default SampleManagePage;