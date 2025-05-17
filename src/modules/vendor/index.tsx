import DynamicForm from "@generator/form";
import { Data } from "@generator/form/index.types";
import Table from "@generator/table";
import { Button } from "@shared/components";
import Header, { Breadcrumb } from "@shared/components/BreadCrumbs";
import ActionDialog from "@shared/components/DialogueBox";
import {
  ColumnSort,
  PaginationState,
  RowSelectionState,
} from "@tanstack/react-table";
import { useState } from "react";
import useVendorPage, { User } from "./hooks/useVendor";

const Vendor = () => {
  /*
  ###################
        STATES
  ###################
  */
  const {
    columns: vendorColumns,
    data: vendorDataFromHook,
    formSchema: vendorFormSchema,
  } = useVendorPage();

  const [isForm, setIsForm] = useState<boolean>(false);
  const [sorting, setSorting] = useState<ColumnSort[]>([]);
  const [rows, setRows] = useState<RowSelectionState>({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 50,
  });
  const [formData, setFormData] = useState<Data>({});
  const [vendorData, setVendorData] = useState<User[]>(vendorDataFromHook); 

  const getRowId = (row: User) => row.id;

  return (
    <>
 
      {Object.keys(rows).length > 0 && (
        <ActionDialog
          onView={() => {
            console.log("View");
          }}
          onEdit={() => {
            const selectedId = Object.keys(rows)[0];
            const selectedRow = vendorData.find((row) => row.id === selectedId);
            if (selectedRow) {
              setFormData(selectedRow);
              setIsForm(true);
            }
          }}
          onDelete={() => {
            const selectedIds = Object.keys(rows);
            const updatedVendors = vendorData.filter(
              (row) => !selectedIds.includes(row.id)
            );
            setVendorData(updatedVendors); 
            setRows({}); 
          }}
          disableEdit={Object.keys(rows).length !== 1}
          disableView={Object.keys(rows).length !== 1}
        />
      )}

      <Header
        pageName="Vendors"
        label="Here you can manage your Shipper, Consignee, Shipping Line, Agent, CHA etc database."
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Vendor" }]} />

      {!isForm ? (
        <div style={{ marginRight: "10px" }}>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button
              onClick={() => {
                setFormData({});
                setIsForm(true);
              }}
            >
              +Add New
            </Button>
          </div>
          <Table
            columns={vendorColumns}
            data={vendorData}
            getRowId={getRowId}
            sortColumnArr={sorting}
            sortingHandler={setSorting}
            selectedRowsArr={rows}
            selectRowsHandler={setRows}
            pagination={pagination}
            setPagination={setPagination}
            rowCount={vendorData.length}
          />
        </div>
      ) : (
        <>
          <DynamicForm
            schema={vendorFormSchema}
            data={formData}
            setData={setFormData}
          />
          <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
            <Button
              type="ghost"
              variant="destructive"
              onClick={() => {
                setIsForm(false);
                setFormData({});
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                console.log("Submitted:", formData);
                setIsForm(false);
              }}
            >
              Submit
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Vendor;
