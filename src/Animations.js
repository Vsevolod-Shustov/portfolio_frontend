import React from 'react';
import { useSelector } from 'react-redux';

import './Animations.css';

function Animations(){
  const images = useSelector((state) => state.catimages.images);
  if(images){console.log(images[0].url)}

  return (
    <>
      {images ? <div className="ia-container">
          <p>CSS-only accordion</p>
					<figure>
						<img src={images[0].url} alt="image01" />
						<input type="radio" name="radio-set" defaultChecked/>
						<figcaption><span>image01</span></figcaption>

						<figure>
							<img src={images[1].url} alt="image02" />
							<input type="radio" name="radio-set" />
							<figcaption><span>image02</span></figcaption>

							<figure>
								<img src={images[2].url} alt="image03" />
								<input type="radio" name="radio-set" />
								<figcaption><span>image03</span></figcaption>

								<figure>
									<img src={images[3].url} alt="image04" />
									<input type="radio" name="radio-set" />
									<figcaption><span>image04</span></figcaption>

									<figure>
										<img src={images[4].url} alt="image05" />
										<input type="radio" name="radio-set" />
										<figcaption><span>image05</span></figcaption>

										<figure>
											<img src={images[5].url} alt="image06" />
											<input type="radio" name="radio-set" />
											<figcaption><span>image06</span></figcaption>

											<figure>
												<img src={images[6].url} alt="image07" />
												<input type="radio" name="radio-set" />
												<figcaption><span>image07</span></figcaption>

												<figure>
													<img src={images[7].url} alt="image08" />
													<input id="ia-selector-last" type="radio" name="radio-set" />
													<figcaption><span>image08</span></figcaption>
												</figure>
											</figure>
										</figure>
									</figure>
								</figure>
							</figure>
						</figure>
					</figure>
				</div> : 0}
    </>
  )
}

export default Animations;
