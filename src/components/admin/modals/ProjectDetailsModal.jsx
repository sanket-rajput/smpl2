import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Typography, Box, IconButton, styled, Button } from "@mui/material";
import { IconX } from "@tabler/icons-react";

const ProjectDetailsModal = ({data}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" sx={{borderRadius: 0}} color="primary" onClick={handleOpen}>
        View Project
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
          Project Details
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

      <DialogContent dividers sx={{ p: 3, bgcolor: "#021720", display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {renderField("Title", data.title)}
        {renderField("Team ID", data.team_id)}
        {renderField("Project Type", data.project_type)}
        {renderField("Company", data.company)}
        {renderField("Domain", data.domain)}
        {renderField("Guide Name", data.guide_name)}
        {renderField("Guide Email", data.guide_email)}
        {renderField("Guide Phone", data.guide_phone)}
        {renderField("HOD Email", data.hod_email)}
        {renderField("Guide Phone", data.guide_phone)}
        {renderField("NDA Signed", data.nda)}
        {renderField("Demo Available", data.demo)}
        {renderField("No Demo Reason", data.reason_of_demo)}
        {renderField("Techfiesta Participated", data.techfiesta)}
        <Box
          sx={{
            gridColumn: "span 2",
            display: "grid",
            alignItems: "start", 
          }}
        >
          <FieldLabel variant="subtitle2" display="flex" sx={{color: "#5593ad"}} alignItems="center" gap={1}>
            Abstract
          </FieldLabel>
          <FieldValue variant="body1">{data.abstract || "N/A"}</FieldValue>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default ProjectDetailsModal;