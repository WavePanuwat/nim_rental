import { useState } from "react";
import { Stack } from "@mui/material";
import TenantAddBox from "./tenant-add-box";
import TenantAddForm from "./tenant-add-form";
import TenantInfoCard from "./tenant-info-card";
import { TENANT_MOCK } from "@/src/data/room-rental/tenant.mock";
import { TenantInfo } from "./tenant-info-card";

const TenantTab = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [tenants, setTenants] = useState<TenantInfo[]>(TENANT_MOCK);

  return (
    <>
      <Stack spacing={2} alignItems="center">
        {tenants.map((t, index) => (
          <TenantInfoCard
            key={index}
            data={t}
            onDelete={() =>
              setTenants((prev) => prev.filter((_, i) => i !== index))
            }
          />
        ))}

        <TenantAddBox
          label="+ เพิ่มข้อมูลผู้เช่า"
          onClick={() => setOpenAdd(true)}
        />
      </Stack>

      <TenantAddForm
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onSubmit={(tenant) => {
          setTenants((prev) => [...prev, tenant]);
          setOpenAdd(false);
        }}
      />
    </>
  );
};

export default TenantTab;
