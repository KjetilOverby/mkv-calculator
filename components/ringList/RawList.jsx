import React from 'react'

const RawList = (props) => {


   
    
    return (
        <div className={props.openRawList} >
              <div>
                  <h1 style={{textAlign: 'center'}}>Råmål</h1>
                  <div className='raw-list'>
                      <table>
                          <tr>
                              <th>Nominemt mål</th>
                              <th>18%</th>
                              <th>12%</th>
                          </tr>
                          <tr className='even'>
                              <td>22</td>
                              <td onClick={() => props.getRaw(23.1)}>23.1</td>
                              <td onClick={() => props.getRaw(23.7)}>23.7</td>
                          </tr>
                          <tr>
                              <td>23</td>
                              <td onClick={() => props.getRaw(24.1)}>24.1</td>
                              <td onClick={() => props.getRaw(25.2)}>25.2</td>
                          </tr>
                          <tr className='even'>
                              <td>24</td>
                              <td></td>
                              <td onClick={() => props.getRaw(26.2)}>26.2</td>
                          </tr>
                          <tr>
                              <td>25</td>
                              <td onClick={() => props.getRaw(26.2)}>26.2</td>
                              <td onClick={() => props.getRaw(26.9)}>26.9</td>
                          </tr>
                          <tr className='even'>
                              <td>28</td>
                              <td onClick={() => props.getRaw(29)}>29.0</td>
                              <td onClick={() => props.getRaw(29.7)}>29.7</td>
                          </tr>
                          <tr>
                              <td>29</td>
                              <td onClick={() => props.getRaw(30.1)}>30.1</td>
                              <td onClick={() => props.getRaw(30.8)}>30.8</td>
                          </tr>
                          <tr className='even'>
                              <td>30</td>
                              <td onClick={() => props.getRaw(31.2)}>31.2</td>
                              <td onClick={() => props.getRaw(31.7)}>31.7</td>
                          </tr>
                          <tr>
                              <td>32</td>
                              <td onClick={() => props.getRaw(33.2)}>33.2</td>
                              <td onClick={() => props.getRaw(33.8)}>33.8</td>
                          </tr>
                          <tr className='even'>
                              <td>33</td>
                              <td onClick={() => props.getRaw(34.2)}>34.2</td>
                              <td onClick={() => props.getRaw(34.8)}>34.8</td>
                          </tr>
                          <tr>
                              <td>34</td>
                              <td onClick={() => props.getRaw(35.3)}>35.3</td>
                              <td onClick={() => props.getRaw(35.6)}>36.6</td>
                          </tr>
                          <tr className='even'>
                              <td>35</td>
                              <td onClick={() => props.getRaw(36.3)}>36.3</td>
                              <td onClick={() => props.getRaw(37.1)}>37.1</td>
                          </tr>
                          <tr>
                              <td>38</td>
                              <td onClick={() => props.getRaw(39.4)}>39.4</td>
                              <td onClick={() => props.getRaw(39.9)}>39.9</td>
                          </tr>
                          <tr className='even'>
                              <td>40</td>
                              <td onClick={() => props.getRaw(41.6)}>41.6</td>
                              <td onClick={() => props.getRaw(42.4)}>42.4</td>
                          </tr>
                          <tr>
                              <td>43</td>
                              <td onClick={() => props.getRaw(44.5)}>44.5</td>
                              <td onClick={() => props.getRaw(46.8)}>46.8</td>
                          </tr>
                          <tr className='even'>
                              <td>44</td>
                              <td onClick={() => props.getRaw(45.5)}>45.5</td>
                              <td onClick={() => props.getRaw(46.8)}>46.8</td>
                          </tr>
                          <tr>
                              <td>45</td>
                              <td onClick={() => props.getRaw(47)}>47.0</td>
                              <td onClick={() => props.getRaw(47.8)}>47.8</td>
                          </tr>
                          <tr className='even'>
                              <td>46</td>
                              <td onClick={() => props.getRaw(47.7)}>47.7</td>
                              <td onClick={() => props.getRaw(48.8)}>48.8</td>
                          </tr>
                          <tr>
                              <td>47</td>
                              <td onClick={() => props.getRaw(48.7)}>48.7</td>
                              <td onClick={() => props.getRaw(49.8)}>49.8</td>
                          </tr>
                          <tr className='even'>
                              <td>50</td>
                              <td onClick={() => props.getRaw(51.7)}>51.7</td>
                              <td onClick={() => props.getRaw(53.2)}>53.2</td>
                          </tr>
                         
                         
                          <tr>
                              <td>56</td>
                              <td onClick={() => props.getRaw(57.9)}>57.9</td>
                              <td onClick={() => props.getRaw(59.4)}>59.4</td>
                          </tr>
                          <tr className='even'>
                              <td>63</td>
                              <td onClick={() => props.getRaw(65)}>65</td>
                              <td onClick={() => props.getRaw(66)}>66</td>
                          </tr>
                          <tr>
                              <td>66</td>
                              <td onClick={() => props.getRaw(68.1)}>68.1</td>
                              <td onClick={() => props.getRaw(70.1)}>70.1</td>
                          </tr>
                          <tr className='even'>
                              <td>75</td>
                              <td onClick={() => props.getRaw(77.3)}>77.3</td>
                              <td onClick={() => props.getRaw(79.7)}>79.7</td>
                          </tr>
                      </table>
                  </div>
              </div>
            <style jsx>{`
                 table {
                     background: #3D9970;
                     width: 100%
                 }
                 th, td {
                     text-align: center;
                     font-size: 1.3rem;
                     font-weight: bold;
                     padding: .3rem .2rem
                 }
                  tr.even {
                      background: #AAAAAA
                  }
                  tr {
                      
                  }
                  tr:hover {
                      background: black;
                      color: white
                  }
                  td:hover {
                      background: yellow;
                      color: black;
                      cursor: pointer
                  }
                .raw-list-container {
                    height: 100vh;
                  width: 17vw;
                  background: var(--inner-ring);
                  position: absolute;
                  right: -17vw;
                  z-index: 100
                }

                .raw-list {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    z-index:1000
                }
                .show-raw-list {
                  display: block;
                  animation: showRawList .2s;
                  -webkit-animation-fill-mode: forwards, none;
                  
                  right: -17vw;

              }
              .hide-raw-list {
                animation: hideRawList .2s;
                -webkit-animation-fill-mode: forwards, none;
                
                  right: 0;
                  
              }
              @keyframes showRawList {
                  100% {transform: translateX(-17vw); display: none}
              }

              @keyframes hideRawList {
                  100% {transform: translateX(17vw) }
               }
            `} 
            </style>
        </div>
    )
}

export default RawList
