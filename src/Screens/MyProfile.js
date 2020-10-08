import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Location from '@material-ui/icons/LocationOn';

import MailIcon from '@material-ui/icons/Mail';
import ReputationPoint from '../Components/ReputaionPoints';



const MyProfile = (props) => {
   
 
		return (
			<div className='myprofile-container'>
				<Grid container component='main'>
					<CssBaseline />
					<Grid item xs={12} md={3}>
						<div className='image' style={{ textAlign: 'center' }}>
                            
							<img
								src= "https://i.pinimg.com/474x/44/06/06/4406065a7f788f941c98fccdde98735e.jpg"
								alt= "ggg"
								style={{ width: '200px', height: '200px', borderRadius: '7px' }}
							/>
                            
						</div>
                        </Grid>
                    <Grid item xs={12} md={4}>    
						<div className='article-subhead center' style={{ fontWeight: '800' }}>
							<h3>Ritika Iyer </h3>
						</div>
						<div className='propic' style={{ textAlign: 'center', fontWeight: '800' }}>
							<h5>
								<span className='material-icons job-link-icons'>
									<Location />
								</span>
								<span style={{ verticalAlign: 'middle' }}>Hyderabad</span>
							</h5>
						</div>
                        {/* <div style={{ textAlign: 'center', fontWeight: '800' }}>
							<h6>
								
								<span style={{ verticalAlign: 'middle' }}>Book-nerd</span>
							</h6>
						</div> */}
						<div style={{ textAlign: 'center' }}>
							<span style={{ textAlign: 'center' }}>
								<ReputationPoint ReputationPoint= "25" />
							</span>
                        
						</div>
                        <div style={{ textAlign: 'center', fontWeight: '800' }}>
                        <div className='profile-section'>
								<p className='product-subhead'>Bio</p>
								<p className='product-content'>
									La vie est belle
								</p>
                        </div>
					</div>
                    </Grid>
                    <Grid item xs={12} md={5}>  
						<div className='link-container'>
                       <h5> Contact:</h5>
							<div style={{ padding: '1px' }}>
								<span>
                                    
									<span className='material-icons job-link-icons'>
										<MailIcon />
									</span>
                                   
									<span>
                                        
										<a className='links' href='#'>
											e-mail address
										</a>
									</span>
								</span>
							</div>
						</div>
                    
                        
					</Grid>
                  
				
                </Grid>
			</div>
		);
	
};

export default MyProfile;
