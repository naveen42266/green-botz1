import { Box, Modal, Typography } from '@mui/material';
import React, {  useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PrintIcon from '@mui/icons-material/Print';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import CoffeeIcon from '@mui/icons-material/Coffee';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from "@mui/icons-material/AddRounded";

interface ReecoComponentProps {
    myData: Array<any>;
    id: string;
    handleApprove: (id: string) => void;
    setId: (id: string) => void;
    handleMissing: () => void
}

const ReecoComponent: React.FC<ReecoComponentProps> = ({ myData, id, handleApprove, setId, handleMissing }) => {
    const [open, setOpen] = useState(false)
    const [edit, setEdit] = useState(false)
    function handleClose() {
        setOpen(false)
    }
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div className=''>

            {/* header */}
            <div className="h-10 w-full flex flex-row justify-between bg-[#508D69] items-center">
                <div className='flex gap-2 px-32 text-white text-base'>
                    <div className='px-4 text-xl font-bold'>Reeco</div>
                    <div className='px-4'>Store</div>
                    <div className='px-4'>Orders</div>
                    <div className='px-4'>Analytics</div>
                </div>
                <div className='flex px-32'>
                    <AddShoppingCartIcon className='px-4' />
                    <div className='px-4 text-white'>
                        Hello, James
                        <KeyboardArrowDownIcon sx={{ color: "white" }} />
                    </div>
                </div>
            </div>

            {/* choosed order */}
            <div className='px-32 pb-4 shadow-md'>
                <div className='flex py-2'>
                    <div>Orders</div>
                    <ChevronRightIcon />
                    <div className='underline '>Order4736278</div>
                </div>
                <div className='flex justify-between pt-2'>
                    <div className='text-xl font-bold'>Order4736278</div>
                    <div className='flex gap-3'>
                        <div className='px-2 rounded-full text-[#508D69] border border-[#508D69] text-center'>Back</div>
                        <div className='px-2 rounded-full bg-[#508D69] text-white text-center'>Approve order</div>
                    </div>
                </div>
            </div>

            {/* order details */}
            <div className='px-32 pt-10 rounded-full'>
                <div className='border p-3'>
                    <div className='grid grid-cols-6 gap-x-4 text-center'>
                        <div className='border-r pr-4 flex flex-col'>
                            <div>Supplier</div>
                            <div className='whitespace-pre-line font-bold'>East coast fruits and vegtables</div>
                        </div>
                        <div className='border-r pr-4 flex flex-col'>
                            <div>Shipping Date</div>
                            <div className='font-bold'>Thu , Feb 10</div>
                        </div>
                        <div className='border-r pr-4 flex flex-col'>
                            <div>Total</div>
                            <div></div>
                            <div className='font-bold'>$ 15,028</div>
                        </div>
                        <div className='border-r pr-4'>
                            <div>Category</div>
                            <div className='grid grid-cols-12 gap-3 pt-1' >
                                <AcUnitIcon fontSize='small' className='col-span-3' />
                                <AgricultureIcon fontSize='small' className='col-span-3' />
                                <ChildFriendlyIcon fontSize='small' className='col-span-3' />
                                <CoffeeIcon fontSize='small' className='col-span-3' />
                                <CoffeeIcon fontSize='small' className='col-span-3' />
                                <ChildFriendlyIcon fontSize='small' className='col-span-3' />
                                <AgricultureIcon fontSize='small' className='col-span-3' />
                                <AcUnitIcon fontSize='small' className='col-span-3' />
                            </div>
                        </div>
                        <div className='border-r pr-4 flex flex-col'>
                            <div>Department</div>
                            <div className='font-bold'>300-499-213</div>
                        </div>
                        <div className='pr-4 flex flex-col'>
                            <div>Status</div>
                            <div className='font-bold'>Awaiting for your approval</div>
                        </div>
                    </div>
                </div>
            </div>


            {/* total details */}

            <div className='px-32 pt-10 rounded-full'>
                <div className='border p-3'>
                    <div className='flex justify-between items-center'>
                        <div className='p-1 border rounded-full w-[30%] flex justify-between'>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search...."
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={(v) => { console.log(v.target.value) }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => { }}>
                                <SearchIcon />
                            </IconButton>
                        </div>
                        <div className='flex justify-between items-center gap-3'>
                            <span className='px-2 pt-1 h-10 rounded-full text-[#508D69] border border-[#508D69] text-center' onClick={() => { }}>Add items</span>
                            <PrintIcon />
                        </div>
                    </div>

                    <div className='grid grid-cols-12 p-1 mt-3 text-center '>
                        <div className='col-span-4'>
                            <div className='flex flex-col'>
                                <div className='border-l-2 border-b-2 border-t-2 rounded-tl-lg'>Product name</div>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='flex flex-col'>
                                <div className=' border-b-2 border-t-2'>Brand</div>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='flex flex-col'>
                                <div className=' border-b-2 border-t-2'>Price</div>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='flex flex-col'>
                                <div className=' border-b-2 border-t-2'>Quantity</div>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='flex flex-col'>
                                <div className=' border-b-2 border-t-2'>Total</div>
                            </div>
                        </div>
                        <div className='col-span-4 '>
                            <div className='flex flex-col'>
                                <div className=' border-r-2 border-b-2 border-t-2 rounded-tr-lg'>Status</div>
                            </div>
                        </div>
                    </div>
                    {/* datails */}
                    <div className='pb-10'>
                        {myData && myData?.map((each) => {
                            return (
                                <div className='grid grid-cols-12 p-1 mt-3 text-center border-b-2' key={each.id}>
                                    <div className='col-span-4'>
                                        <div className='flex flex-col'>
                                            <div className='flex  h-20 w-full items-center'>
                                                <img className='h-10 w-10' src="/AvocadoHass.jpg" alt="" />
                                                <div className='whitespace-pre-line pt-5'>{each?.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-1'>
                                        <div className='flex flex-col'>
                                            <div className='pt-5'>
                                                {each?.brand}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-1'>
                                        <div className='flex flex-col'>
                                            <div className='pt-5'>
                                                ${each?.price}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-1'>
                                        <div className='flex flex-col'>
                                            <div className='pt-5'>
                                                {each?.quantity}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-1'>
                                        <div className='flex flex-col'>
                                            <div className='pt-5'>
                                                {each?.total}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-4 '>
                                        <div className='flex flex-col'>
                                            <div className='flex justify-between gap-3 bg-[#EEEEEE] h-20 w-full items-center pr-5'>
                                                <div>{each?.status === "approved" ? (<div className='px-2 bg-[#39B54A] rounded-full ml-5'>Approved</div>) : each?.status === "missing" ? (<div className='px-2 bg-[#D83F31] rounded-full ml-5'>Missing</div>) : null}</div>
                                                <div className='flex gap-3'>
                                                    {each?.status === "approved" ? (
                                                        <CheckIcon sx={{ color: "#39B54A" }} onClick={() => { handleApprove(each?.id) }} />
                                                    ) : (
                                                        <CheckIcon onClick={() => { handleApprove(each?.id) }} />
                                                    )}

                                                    {each?.status === "missing" ? (
                                                        <ClearIcon sx={{ color: "#D83F31" }} onClick={() => { setOpen(true); setId(each?.id); }} />
                                                    ) : (
                                                        <ClearIcon onClick={() => { if (each?.status !== "approved") setOpen(true); setId(each?.id); }} />
                                                    )}
                                                    <div onClick={() => { setEdit(true); setId(each?.id); }} >Edit</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Missing */}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className='flex justify-between'>
                            <div>
                                Missing product
                            </div>
                            <ClearIcon onClick={() => { setOpen(false) }} />
                        </div>

                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <div className='flex justify-end'>
                        <div className='flex justify-between gap-6'>
                            <div onClick={() => { setOpen(false); }}>No</div>
                            <div onClick={() => { setOpen(false); handleMissing(); }}>Yes</div>
                        </div>

                    </div>
                </Box>
            </Modal>


            {/* Edit */}

            <Modal
                open={edit}
                onClose={() => { setEdit(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className='flex justify-between'>
                            <div>
                                East coast fruits and vegtables
                            </div>
                            <ClearIcon onClick={() => { setEdit(false) }} />
                        </div>
                        <div className='text-gray-500'>
                            American Roland
                        </div>
                        <div className='grid grid-cols-12 text-base'>
                            <div className='col-span-3'>
                                <img className='' src="/AvocadoHass.jpg" alt="" />
                            </div>
                            <div className='col-span-3 p-2'>
                                <div>Price ($)</div>
                                <div className='py-2'>Quantity</div>
                                <div>Total</div>
                            </div>
                            <div className='col-span-6 p-2'>
                                <div className='flex pl-7 gap-3'>
                                    <div className='border rounded-2xl px-3'>9999.9</div>
                                    <div>/6 * 1LB</div>
                                </div>
                                <div className='flex gap-3 items-center py-2'>
                                    <RemoveRoundedIcon
                                        fontSize='small'
                                        className='rounded-full'
                                        sx={{
                                            backgroundColor: "#39B54A",
                                            padding: "4px",
                                            color: "white",
                                        }} />
                                    <div className='border rounded-2xl px-3'>9999.9</div>
                                    <AddRoundedIcon
                                        fontSize='small'
                                        className='rounded-full'
                                        sx={{
                                            backgroundColor: "#39B54A",
                                            padding: "4px",
                                            color: "white",
                                        }} />
                                    <div>x6 * 1LB</div>
                                </div>
                                <div className='pl-9'>
                                    $9234.46
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='font-bold text-base'>Choose reason</div>
                            <div className='text-gray-400 text-sm'>(Optional)</div>
                        </div>
                        <div className='flex text-sm gap-2 py-3'>
                            <div className='border px-2 rounded-full'>Missing product</div>
                            <div className='border px-2 rounded-full'>Quantity is not the same</div>
                            <div className='border px-2 rounded-full'>Price is not the same</div>
                            <div className='border px-2 rounded-full'>other</div>
                        </div>
                        <div className='flex justify-end gap-3 text-base'>
                            <div className='text-[#2a6b45]' onClick={() => { setEdit(false); }}>Cancel</div>
                            <div className='border px-2 rounded-full text-white bg-[#2a6b45]'>Send</div>
                        </div>
                    </Typography>
                </Box>
            </Modal>

        </div>
    );
}

export default ReecoComponent;
