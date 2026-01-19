import { useEffect, useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import FormButton from '../forms/FormButton'
import { useLazyGetAllocatedProjectsQuery } from '../../app/services/judgeAPI'
import { Dialog, DialogTitle, DialogContent, Typography, IconButton, styled, Button, Box } from "@mui/material";
import { IconX } from "@tabler/icons-react";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const initialState = {
  project_id: '',
}

const JudgeEvaluate = () => {

  const judge_data = JSON.parse(window.sessionStorage.getItem('judge_data'));
  const [formData, setFormData] = useState(initialState);
  const [allocatedProjects, setAllocatedProjects] = useState([]);
  const [ getAllocatedProjects, { isFetching }] = useLazyGetAllocatedProjectsQuery();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pid = formData.project_id;
    handleEvaluate(pid);
    setFormData(initialState);
  }

  const fetchAllocatedProjects = async () => {
    try {
      const data = await getAllocatedProjects(judge_data?.jid).unwrap();
      setAllocatedProjects(data);
      console.log(data);
    } catch(error){
      console.error(error);
      toast.error(error?.data?.message || error?.message || 'Something went wrong');
    }
  }

  const handleEvaluate = (pid) => {
    if(pid?.slice(0, 2).toLowerCase() === "im"){
      navigate(`/judge/evaluate/impetus/${pid}`);
    }
    else if(pid?.slice(0, 2).toLowerCase() === "co"){
      navigate(`/judge/evaluate/concepts/${pid}`);
    }
  }

  useEffect(() => {
    fetchAllocatedProjects();
  }, [])

  const renderP = (key, value) => {
    return <p className='text-orange-100 font-semibold sm:text-lg'>{key}: <span className='text-white-100 font-normal'>{value}</span></p>
  }

  return (
    <div className='max-w-7xl sm:mx-auto mx-2 pt-8'>
      <form className='max-w-5xl mx-auto flex flex-col items-center' onSubmit={handleSubmit}>
        <div>
        <Label htmlFor="project_id">Enter Project ID for Extra Evaluation</Label>
        <div className='flex items-center gap-1 pt-1'>
          <Input
            id="project_id"
            name="project_id"
            value={formData.project_id}
            onChange={handleChange}
            placeholder="Enter project ID"
            />
          <FormButton loading={false} className={`h-[45px] w-20`}/>
        </div>
        </div>
      </form>
      {isFetching && <p>Loading...</p>}
      {allocatedProjects?.impetus?.length ? 
      <div className='flex flex-col gap-4 pt-10'>
        <h2 className='sm:text-2xl text-xl text-orange-100 font-bold'>Allocated Projects - Impetus</h2>
        {allocatedProjects.impetus.map((project) => (
          <div key={project.pid} className='bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-px'>
            <div className='text-white-100 bg-tertiary p-6 grid grid-cols-2 gap-4'>
              {renderP('Title', project.title)}
              {renderP('ID', project.pid)}
              {renderP('Lab', project.lab)}
              {renderP('Domain', project.domain)}
              <AbstractModal data={project.abstract} />
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 0,
                  width: "fit-content",
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  padding: { xs: "4px 8px", sm: "6px 12px" },
                }}
                color="primary"
                onClick={() => {handleEvaluate(project.pid);} }
              >
                Evaluate
              </Button>
            </div>
          </div>
        ))}
      </div> : <></>}

      {allocatedProjects?.concepts?.length ? 
      <div className='flex flex-col gap-4 pt-10'>
        <h2 className='sm:text-2xl text-xl text-orange-100 font-bold'>Allocated Projects - Concepts</h2>
        {allocatedProjects.concepts.map((project) => (
          <div key={project.pid} className='bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-px'>
            <div className='text-white-100 bg-tertiary p-6 grid grid-cols-2 gap-4'>
              {renderP('Title', project.title)}
              {renderP('ID', project.pid)}
              {renderP('Lab', project.lab)}
              {renderP('Domain', project.domain)}
              <AbstractModal data={project.abstract} />
              <Button
              variant="outlined"
              sx={{
                borderRadius: 0,
                width: "fit-content",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                padding: { xs: "4px 8px", sm: "6px 12px" },
              }}
              color="primary"
              onClick={() => handleEvaluate(project.pid)}
            >
              Evaluate
            </Button>
            </div>
          </div>
        ))}
      </div> : <></>}

      {!isFetching && !allocatedProjects?.concepts?.length && !allocatedProjects?.impetus?.length && <p className='text-center text-red-500 text-xl font-semibold pt-10'>No projects allocated.</p>}
    </div>
  )
}

export default JudgeEvaluate

const AbstractModal = ({data}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="outlined"
        sx={{
          borderRadius: 0,
          width: "fit-content",
          fontSize: { xs: "0.75rem", sm: "0.875rem" },
          padding: { xs: "4px 8px", sm: "6px 12px" },
        }}
        color="primary"
        onClick={handleOpen}
      >
        View Abstract
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

const FieldValue = styled(Typography)(() => ({
  color: "#ffffff",
  marginBottom: "16px"
}));

const DataDisplayModal = ({ open, onClose, data }) => {

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
          Project Abstract
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
        <Box
          sx={{
            gridColumn: "span 2",
            display: "grid",
            alignItems: "start", 
          }}
        >
          <FieldValue variant="body1">{data || "N/A"}</FieldValue>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};