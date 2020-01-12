import React from 'react'

const RawList = (props) => {


    console.log('from props: ' + props.openRawList);
    
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
                              <td>23.1</td>
                              <td>23.7</td>
                          </tr>
                          <tr>
                              <td>23</td>
                              <td>24.1</td>
                              <td>25.2</td>
                          </tr>
                          <tr className='even'>
                              <td>24</td>
                              <td></td>
                              <td>26.2</td>
                          </tr>
                          <tr>
                              <td>25</td>
                              <td>26.2</td>
                              <td>26.9</td>
                          </tr>
                          <tr className='even'>
                              <td>28</td>
                              <td>29.0</td>
                              <td>29.7</td>
                          </tr>
                          <tr>
                              <td>29</td>
                              <td>30.1</td>
                              <td>30.8</td>
                          </tr>
                          <tr className='even'>
                              <td>30</td>
                              <td>31.2</td>
                              <td>31.7</td>
                          </tr>
                          <tr>
                              <td>32</td>
                              <td>33.2</td>
                              <td>33.8</td>
                          </tr>
                          <tr className='even'>
                              <td>33</td>
                              <td>34.2</td>
                              <td>34.8</td>
                          </tr>
                          <tr>
                              <td>34</td>
                              <td>35.3</td>
                              <td>36.6</td>
                          </tr>
                          <tr className='even'>
                              <td>35</td>
                              <td>36.3</td>
                              <td>37.1</td>
                          </tr>
                          <tr>
                              <td>38</td>
                              <td>39.4</td>
                              <td>39.9</td>
                          </tr>
                          <tr className='even'>
                              <td>40</td>
                              <td>41.6</td>
                              <td>42.4</td>
                          </tr>
                          <tr>
                              <td>43</td>
                              <td>44.5</td>
                              <td>46.8</td>
                          </tr>
                          <tr className='even'>
                              <td>44</td>
                              <td>45.5</td>
                              <td>46.8</td>
                          </tr>
                          <tr>
                              <td>45</td>
                              <td>47.0</td>
                              <td>47.8</td>
                          </tr>
                          <tr className='even'>
                              <td>46</td>
                              <td>47.7</td>
                              <td>48.8</td>
                          </tr>
                          <tr>
                              <td>47</td>
                              <td>48.7</td>
                              <td>49.8</td>
                          </tr>
                          <tr className='even'>
                              <td>50</td>
                              <td>51.7</td>
                              <td>53.2</td>
                          </tr>
                         
                         
                          <tr>
                              <td>56</td>
                              <td>57.9</td>
                              <td>59.4</td>
                          </tr>
                          <tr className='even'>
                              <td>63</td>
                              <td>65</td>
                              <td>66</td>
                          </tr>
                          <tr>
                              <td>66</td>
                              <td>68.1</td>
                              <td>70.1</td>
                          </tr>
                          <tr className='even'>
                              <td>75</td>
                              <td>77.3</td>
                              <td>79.7</td>
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
                      transition: .5s
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
                  width: 15vw;
                  background: var(--inner-ring);
                  position: absolute;
                  right: -15vw;
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
                  
                  right: -15vw;

              }
              .hide-raw-list {
                animation: hideRawList .2s;
                -webkit-animation-fill-mode: forwards, none;
                
                  right: 0;
                  
              }
              @keyframes showRawList {
                  100% {transform: translateX(-15vw); display: none}
              }

              @keyframes hideRawList {
                  100% {transform: translateX(15vw) }
               }
            `} 
            </style>
        </div>
    )
}

export default RawList
