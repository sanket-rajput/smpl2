import { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Typography, Box, IconButton, styled, Button, Modal } from "@mui/material";
import { IconX } from "@tabler/icons-react";
import { useLazyGetCollegeIDQuery } from "../../../app/services/adminAPI";
import Loader from "../../ui/Loader";
import { toast } from "react-toastify";

const TeamDetailsModal = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" sx={{ borderRadius: 0 }} color="primary" onClick={handleOpen}>
        View Team
      </Button>
      <DataDisplayModal open={open} onClose={handleClose} data={data} />
    </div>
  );
};

const StyledDialog = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    width: "100%",
    maxWidth: "800px",
    margin: "16px",
    borderRadius: "0px",
  }
}));

const FieldLabel = styled(Typography)(() => ({
  color: "#ffffff",
  fontWeight: 600,
  marginBottom: "4px"
}));

const FieldValue = styled(Typography)(() => ({
  color: "#ffffff",
  marginBottom: "16px"
}));

const DataDisplayModal = ({ open, onClose, data }) => {

  const renderField = (label, value, icon) => (
    <Box>
      <FieldLabel variant="subtitle2" display="flex" sx={{color: "#5593ad"}} alignItems="center" gap={1}>
        {icon}
        {label}
      </FieldLabel>
      <FieldValue variant="body1">
        {value || "N/A"}
      </FieldValue>
    </Box>
  );

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      scroll="paper"
      aria-labelledby="project-details-dialog"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#021720",
          borderBottom: "1px solid #e9ecef"
        }}
      >
        <Typography variant="h6" component="div" fontWeight="bold">
          Team Details
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: "#ffffff"
          }}
        >
          <IconX />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ p: 3, bgcolor: "#021720" }}>
        {data.map((member, index) => (
          <div key={`${member.id}_${index}`}>
            <h3 className="text-bold text-orange-100 mb-1">Member {index+1}</h3>
            <div className="grid grid-cols-2">
              {renderField("Name", member.name)}
              {renderField("College ID", <ChildModal email={member.email}/>)}
              {renderField("Email", member.email)}
              {renderField("Phone", member.phone)}
              {renderField("Gender", member.gender)}
              {renderField("Codechef ID", member.codechef_id)}
            </div>
          </div>
        ))}
      </DialogContent>
    </StyledDialog>
  );
};

export default TeamDetailsModal;

const ChildModal = ({ email }) => {
  const [open, setOpen] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [ getCollegeID, { data, isSuccess, isFetching }] = useLazyGetCollegeIDQuery()

  const handleOpen = async () => {
    try {
      setOpen(true);
      await getCollegeID(email);
    } catch (error) {
      console.error(error);  
      toast.error(error?.data?.message || error?.message || 'Failed to fetch.');    
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if(isSuccess){
      setImageURL(data?.data);
    }
  }, [isSuccess, data])

  return (
    <>
    <Button onClick={handleOpen} sx={{m: 0, p: 0}}>Show Image</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: "#021720", p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
        {isFetching ? <Loader /> : <img src={imageURL} alt="collge id image" className="object-contain"/>}
        <Button onClick={handleClose} variant="outlined" sx={{borderRadius: 0}}>Close</Button>
      </Box>
    </Modal>
    </>
  )
}