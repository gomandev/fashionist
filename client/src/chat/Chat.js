import React from 'react'
import styled from 'style-loader'
import StudentPane from '../../../../../../components/Layouts/StudentPane'

const Chat = () => (
<Wrapper>
    <Side>
      <StudentPane />
    </Side>
    <Content>
      <Pages>
        <PageContainer>
          
        </PageContainer>
      </Pages>
    </Content>
  </Wrapper>
)

const PageContainer = styled.div`
  width: 90%;
  margin: auto;
`

const InnerContainer = styled.div`
  display: flex;
`

const ProfilePic = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: #115293;
`

const Info = styled.div`
  margin: 1.25rem;
`

const Flex = styled.div`
  display: flex;
`


const TitleSm = styled.p`
  font-size: 1.1rem;
  color: #fff;
`


const InfoText = styled.div`
  margin-left: 30px;
`

const InfoWrapper = styled.div`
  display: flex;
`

const Title = styled.h4`
  color: #64b5f6;
  margin-bottom: 20px;
`

const TitleMd = styled.p`
  color: #64b5f6;
  padding-top: 20px;
  font-size: 1.1rem;
  // margin-bottom: 20px;
`

const TitleMin = styled.p`
  color: #64b5f6;
  padding-top: 20px;
  font-size: 0.8rem;
  // margin-bottom: 20px;
`

const RightWrapper = styled.div`
  flex: 7;
`

const FadedText = styled.p`
  color: #eeeeee;
  font-size: 1rem;
`

const FadedTextLg = styled.h3`
  color: #222222;
  font-size: 1.5rem;
`

const FadedTextDark = styled.p`
  color: #333333;
  font-size: 1.2rem;
`

const FadedTextDarkMd = styled.p`
  color: #666666;
  font-size: 1rem;
`

const FadedTextDarkSm = styled.p`
  color: #999999;
  font-size: 0.8rem;
`

const LeftWrapper = styled.div`
  flex: 3;
`

const CustomCard = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.50rem;
  
 
`

const CustomCardPro = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.80rem;
  
 
`

const CardTop = styled.div`
  width: 100%;
  background-color: #64b5f6;
`


const Wrapper = styled.div`
  display: flex;
`
const Pages = styled.div`
  background-color: #f2f2f2;
  
`
const Content = styled.div`
  flex: 8;
`
const Side = styled.div`
  flex: 2;
`


export default Chat
