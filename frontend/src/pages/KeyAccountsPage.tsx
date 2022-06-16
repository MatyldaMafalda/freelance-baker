import React, { useState } from "react";
import { routes } from "routing/routes";
import { useNavigate } from "react-router";

// import {
//     KeyAccountPayload,
//     KeyAccountRequest,
//     useAddKeyAccountMutation,
//     useGetKeyAccountsQuery,
//     useUpdateKeyAccountMutation,
//     useDeleteKeyAccountMutation,
// } from "store";

import { PageHeader } from "components/common/PageHeader";
import { Modal } from "components/common/Modal";
import { Button } from "components/form/Button";
//import { AddKeyAccountForm } from "components/form/AddKeyAccountForm";
import { Loader } from "components/common/Loader";
import { DataTable } from "components/common/table/DataTable";
import { IconButton } from "components/common/table/IconButton";
import { WidgetFrame } from "components/common/WidgetFrame";
import { DeleteIcon, ModeEditIcon, BallotIcon } from "components/icons/Icons";
import { LoaderOverlap } from "components/styled/LoaderOverlap";
import { MessageBox } from "components/common/MessageBox";

// interface KeyAccountRow extends KeyAccountPayload {
//     key: number;
// }

export const KeyAccountsPage: React.VFC = () => {
    // const navigate = useNavigate();

    // const [showKeyAccountForm, setShowKeyAccountForm] = useState(false);
    // const [editData, setEditData] = useState<KeyAccountPayload | null>(null);

    // const [createKeyAccount, { isLoading: isCreateLoading }] = useAddKeyAccountMutation();
    // const [updateKeyAccount, { isLoading: isUpdateLoading }] = useUpdateKeyAccountMutation();
    // const [deleteKeyAccount, { isLoading: isDeleteLoading }] = useDeleteKeyAccountMutation();
    // const { data, isLoading: isQueryLoading, isFetching } = useGetKeyAccountsQuery();

    // const isLoading = isQueryLoading || isDeleteLoading || isFetching;

    // const handleCreateKeyAccount = async (values: KeyAccountRequest) => {
    //     await createKeyAccount(values);
    //     setShowKeyAccountForm(false);
    // };

    // const handleUpdateKeyAccount = async (values: KeyAccountRequest) => {
    //     if (editData) {
    //         await updateKeyAccount({ keyAccount: values, id: editData.id });
    //         setShowKeyAccountForm(false);
    //         setEditData(null);
    //     }
    // };

    // const handleDelete = (keyAccount: KeyAccountRow) => {
    //     deleteKeyAccount(keyAccount.id);
    // };

    // const handleOpenDetailPage = (keyAccount: KeyAccountRow) => {
    //    // navigate(`${routes.keyAccountDetail.getPath({ keyAccountId: keyAccount.id.toString() })}`);
    // };

    // const openModal = (isOpen: boolean, keyAccount?: KeyAccountRow) => {
    //     setShowKeyAccountForm(isOpen);
    //     setEditData(keyAccount ? keyAccount : null);
    // };

    // const tableOperations = [
    //     {
    //         key: "actions",
    //         render: (keyAccount: KeyAccountRow) => (
    //             <>
    //                 <IconButton onClick={() => handleOpenDetailPage(keyAccount)} title={"Details"}>
    //                     <BallotIcon size={"2rem"} />
    //                 </IconButton>
    //                 <IconButton onClick={() => openModal(true, keyAccount)} title={"Edit"}>
    //                     <ModeEditIcon size={"2rem"} />
    //                 </IconButton>
    //                 <IconButton onClick={() => handleDelete(keyAccount)} variant={"delete"} title={"Delete"}>
    //                     <DeleteIcon size={"2rem"} />
    //                 </IconButton>
    //             </>
    //         ),
    //     },
    // ];

    return (
        <div>yay</div>
        // <>
        //     <PageHeader title={"Key Account Administration"}>
        //         <Button onClick={() => setShowKeyAccountForm(true)}>Add Key Account</Button>
        //     </PageHeader>
        //     <WidgetFrame isLoading={isLoading}>
        //         {data?.length ? (
        //             <DataTable
        //                 iconName={"KeyAccountIcon"}
        //                 title={"Key Accounts"}
        //                 data={data}
        //                 tableOperations={tableOperations}
        //             />
        //         ) : (
        //             <MessageBox>{"No data"}</MessageBox>
        //         )}
        //     </WidgetFrame>

        //     <Modal isOpen={showKeyAccountForm} setOpen={openModal}>
        //         <AddKeyAccountForm
        //             editData={editData}
        //             handleSubmit={editData ? handleUpdateKeyAccount : handleCreateKeyAccount}
        //         ></AddKeyAccountForm>
        //         {isCreateLoading ||
        //             (isUpdateLoading && (
        //                 <LoaderOverlap>
        //                     <Loader size={"4rem"} />
        //                 </LoaderOverlap>
        //             ))}
        //     </Modal>
        // </>
    );
};
