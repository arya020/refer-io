import React, { useState ,useEffect} from 'react';
import './ReferralPost.css';
import { API_BASE_URL } from '../constants';
import {request} from '../util/APIUtils';
import './ReferralPost.css';

const ReferralPost = (props) => {
    const [formData, setFormData] = useState({
        userid:'',
        logo:'',
        company: '',
        skills:[],
        description: '',
        yoe:'',
        jobRole: '',
        deadline: '',
        numberOfApplicants:''
    });

    const [skills, setSkills] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        // Fetch skills data from the API
        const fetchData = async () => {
            try {
                const response = await request({
                    url: API_BASE_URL + "/json",
                    method: 'GET',
                });
    
                if (response.skills && Array.isArray(response.skills)) {
                    setSkills(response.skills.map(skill => skill.name));
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
      }, []);
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData((prevData) => ({
            ...prevData,
            'skills': selectedSkills
        }));
        request({
            url: API_BASE_URL + "/create-referral",
            method: 'POST',
            body: JSON.stringify(formData)
        });
        window.alert('Form submitted successfully!');
    };
      

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        formData.userid = props.currentUser.id;
        formData.name = props.currentUser.name;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSkillSelect = (event) => {
        const { value } = event.target;

        if (!selectedSkills.includes(value)) {
            setSelectedSkills(prevSelectedSkills => [...prevSelectedSkills, value]);
        }
        setFormData(prevFormData => ({
            ...prevFormData,
            skills: [...prevFormData.skills, value], // Update skills in formData
          }));
    };

    const handleRemoveSkill = (skillName) => {
        setSelectedSkills(prevSelectedSkills => prevSelectedSkills.filter(skill => skill !== skillName));

        setFormData(prevFormData => ({
            ...prevFormData,
            skills: prevFormData.skills.filter(skill => skill !== skillName),
          }));
    };

    const toggleDropdown = () => {
        setDropdownOpen(prevOpen => !prevOpen);
    };

    return (
    <div class='form-container'>
        <br/>
        <form onSubmit={handleSubmit} className='form'>
            <label>Company: </label>
            <input type="text" name="company" value={formData.company} onChange={handleInputChange} required />
            <label>Job Role: </label>
            <input type="text" name="jobRole" value={formData.jobRole} onChange={handleInputChange} required />

            <label>Select position you are willing to refer: </label>
            <select name="yoe" value={formData.yoe} onChange={handleInputChange} className='yoe_dropdown'>
                <option value="" disabled>Select experience level</option>
                <option value="Entry-level">Entry-level</option>
                <option value="Junior-level">Junior-level</option>
                <option value="Mid-level">Mid-level</option>
                <option value="Senior-level">Senior-level</option>
            </select>
            
               
            <br/>
            <label>Description: </label>
            <input type="text" name="description" value={formData.description} onChange={handleInputChange} required/>
            <label>Deadline: </label>
            <input type="text" name="deadline" value={formData.deadline} onChange={handleInputChange} />
            <label> Number of applicants allowed: </label>
                <select id="number" className='applicant_dropdown'> 
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
            <button type="submit">Create Referral</button>
        </form>
        <br></br>
    </div>
   
    );
}

export default ReferralPost;
