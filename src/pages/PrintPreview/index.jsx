import { Button, Divider, Skeleton } from 'antd';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import { connect, useParams } from 'umi';
import moment from 'moment';
import Logo from '@/assets/icons/logo.png';
import styles from './index.less';

const boldList = [
  {
    text: 'Understand the information relevant to the decision',
    value: '1',
  },
  {
    text: 'Retain that information',
    value: '2',
  },
  {
    text: 'Use or weigh up that information as part of the process of making the decision',
    value: '3',
  },
];
const boldListClientReviewForm = [
  {
    text: 'To gather your views on the quality of the services we provide.',
    value: '1',
  },
  {
    text:
      'To check whether the support and/or services you receive are archieving what you want them to achieve (i.e outcomes).',
    value: '2',
  },
  {
    text:
      'To check how well the individual needs listed in your support plan have been/are being met and whether you have any new ones.',
    value: '3',
  },
  {
    text: 'To check if there need be any other changes to your support plan.',
    value: '4',
  },
  {
    text:
      'To give you an opportunity to say if you would like to get more involved in the way we deliver services.',
    value: '5',
  },
];

const PrintPreview = ({ dispatch, reff, formData, loading }) => {
  const { type, id } = useParams();
  useEffect(() => {
    dispatch({
      type: 'forms/getFormData',
      payload: { id },
    });
  }, [id]);
  const networkData = [
    {
      name: 'Name of Person or Organization',
      value: formData?.networkData?.name || 'NA',
      JSONTextArray: formData?.networkData?.name?.length,
    },
    {
      name: 'Address',
      value: formData?.networkData?.address || 'NA',
      JSONTextArray: formData?.networkData?.address?.length,
    },
    {
      name: 'Assistant / Support Provided Inc. Day(s) & Time',
      value: formData?.networkData?.date ? formData?.networkData?.date : 'NA',
      JSONTextArray: formData?.networkData?.date?.length,
    },
    {
      name: 'Contact Number',
      value: formData?.networkData?.contactNumber || 'NA',
      JSONTextArray: formData?.networkData?.contactNumber?.length,
    },
    {
      name:
        'Any current pressure sores or Is there any risk involved? How will the risk be minimized?',
      value: formData?.networkData?.currentPressure?.HTMLText || 'NA',
      JSONTextArray: formData?.networkData?.currentPressure?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Are you able to answer the front door? Is Will someone else be present to answer the door? Is there any risk involved?',
      value: formData?.networkData?.frontDoor?.HTMLText || 'NA',
      JSONTextArray: formData?.networkData?.frontDoor?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Do you have any hearing difficulty? if yes, how will you minimize the risk?',
      value: formData?.networkData?.hearDifficulty?.HTMLText || 'NA',
      JSONTextArray: formData?.networkData?.hearDifficulty?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Do you have any visual impairment? If yes, how will you minimize the risk?',
      value: formData?.networkData?.hearDifficulty?.HTMLText || 'NA',
      JSONTextArray: formData?.networkData?.hearDifficulty?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'You are well - being/health issues e.g. social and emotional, mood, memory, sleep patterns.',
      value: formData?.networkData?.continence?.HTMLText || 'NA',
      JSONTextArray: formData?.networkData?.continence?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Do you have any issue we should know about? i.e. is there a risk of wandering within or outside the property? Is there any risk involved?',
      value: formData?.networkData?.issue?.HTMLText || 'NA',
      JSONTextArray: formData?.networkData?.issue?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Do you have any dietary requirements or difficulty in eating or drinking? Do you require any support?',
      value: formData?.networkData?.dietary?.HTMLText || 'NA',
      JSONTextArray: formData?.networkData?.dietary?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Continence needs/toileting – Do you require any support?',
      value: formData?.networkData?.currentPressure?.HTMLText || 'NA',
      JSONTextArray: formData?.networkData?.currentPressure?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
  ];

  const basicDetailsRiskAssessment = [
    {
      name: 'Do we remind or administer your medication or what assistance you require?',
      value: formData?.chartData?.medicationAdminister?.HTMLText || 'NA',
      JSONTextArray: formData?.chartData?.medicationAdminister?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Are you able to tell us what medication and how much you take at what times if we are reminding you of your medication?',
      value: formData?.chartData?.medicationTime?.HTMLText || 'NA',
      JSONTextArray: formData?.chartData?.medicationTime?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'If administer a MAR sheet needs to be in place? Is this in place?',
      value: formData?.chartData?.marSheet?.HTMLText || 'NA',
      JSONTextArray: formData?.chartData?.marSheet?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'If the MAR is in place, is the MAR correctly filled I specifying how much of what medication needs to be taken at what times and how it needs to be given?',
      value: formData?.chartData?.marPlacae?.HTMLText || 'NA',
      JSONTextArray: formData?.chartData?.marPlacae?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Is there any risk identifying with the MAR chart? Do you have difficulties taking medication, e.g. swallowing tablets?',
      value: formData?.chartData?.riskIdentify?.HTMLText || 'NA',
      JSONTextArray: formData?.chartData?.riskIdentify?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'What is the risk associated with the above medication?',
      value: formData?.chartData?.riskAssociate?.HTMLText || 'NA',
      JSONTextArray: formData?.chartData?.riskAssociate?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    // {
    //   name:
    //     'Any current pressure sores or Is there any risk involved? How will the risk be minimized?',
    //   value: formData?.chartData?.currentPressure?.HTMLText,
    // },
  ];

  const descriptionListTelephoneMonitoringForm = [
    {
      name: 'Do you think the care / support you receive is reliable? (Regularly on time?)',
      choice: formData?.reliable?.choice || 'NA',
      value: formData?.reliable?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.reliable?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Have all your scheduled visits been attended? (Check for excessive missed calls etc.)',
      choice: formData?.scheduleAttended?.choice || 'NA',
      value: formData?.scheduleAttended?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.scheduleAttended?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Are you always informed if there is a change or if your care/support worker is delayed?',
      choice: formData?.workerDelayed?.choice || 'NA',
      value: formData?.workerDelayed?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.workerDelayed?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Does your care/support worker stay the full time with you for the visit?',
      choice: formData?.workerStay?.choice || 'NA',
      value: formData?.workerStay?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.workerStay?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Do they have their ID and use the required protective equipment? (Gloves etc.)',
      choice: formData?.protectiveEquipment?.choice || 'NA',
      value: formData?.protectiveEquipment?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.protectiveEquipment?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Are always your care/support workers friendly and courteous towards you?',
      choice: formData?.friendly?.choice || 'NA',
      value: formData?.friendly?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.friendly?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Are you receiving the care/support as agreed on your care/support plan? (Are we meeting your outcomes/needs)',
      choice: formData?.receivecare?.choice || 'NA',
      value: formData?.receivecare?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.receivecare?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Does the care/support you receive enable you to do as much you can for yourself (Help you remain as independent as possible?) How so?',
      choice: formData?.independent?.choice || 'NA',
      value: formData?.independent?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.independent?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Do you feel safer because of the care/support you receive from us?',
      choice: formData?.feelSafer?.choice || 'NA',
      value: formData?.feelSafer?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.feelSafer?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Are you asked to sign a time sheet after each visit from your care support worker?',
      choice: formData?.supportWorker?.choice || 'NA',
      value: formData?.supportWorker?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.supportWorker?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: `Have you had to call the 'Out of Hours' service? If so, are you happy with how your call was dealt with?`,
      choice: formData?.outOfHour?.choice || 'NA',
      value: formData?.outOfHour?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.outOfHour?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Are you visited regularly by your field based manager to make sure you are happy with the service?',
      choice: formData?.happyService?.choice || 'NA',
      value: formData?.happyService?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.happyService?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Do you know how to contact the office and who to speak to if you have a problem or wish to make a complaint?',
      choice: formData?.complaint?.choice || 'NA',
      value: formData?.complaint?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.complaint?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
  ];

  const basicDetails = [
    {
      name: 'Product/Substance as described on label and manufacturer',
      value: formData?.description || 'NA',
      JSONTextArray: formData?.description?.length,
    },
    {
      name: 'Where used/for what purpose',
      value: formData?.purpose?.HTMLText || 'NA',
      JSONTextArray: formData?.purpose?.JSONText?.find((list) => list?.children[0]?.text !== ''),
    },
    {
      name: 'Review Nature',
      value: formData?.images?.choice || 'NA',
      JSONTextArray: formData?.images?.choice?.length,
    },
    {
      name: 'Review Choice',
      value: formData?.reviewType?.choice || 'NA',
      JSONTextArray: formData?.reviewType?.choice?.length,
    },
    {
      name: 'Possible means of exposure',
      value: formData?.exposure?.choice || 'NA',
      JSONTextArray: formData?.exposure?.choice?.length,
    },
    {
      name:
        'Are there any Workplace Exposure Limits (WELs) listed for any of the active ingredients listed on the safety data sheet?',
      value: formData?.wels?.choice || 'NA',
      JSONTextArray: formData?.wels?.choice?.length,
    },
    {
      name: 'Is monitoring required to determine levels?',
      value: formData?.monitorDetermine?.choice || 'NA',
      JSONTextArray: formData?.monitorDetermine?.choice?.length,
    },
    {
      name: 'Symptoms/Effects of improper use',
      value: formData?.symptomData?.HTMLText || 'NA',
      JSONTextArray: formData?.symptomData?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Persons who may be exposed',
      value: formData?.exposedPerson || 'NA',
      JSONTextArray: formData?.exposedPerson?.length,
    },
    {
      name: 'Safe Storage',
      value: formData?.storage || 'NA',
      JSONTextArray: formData?.storage?.length,
    },
    {
      name: 'Describe safe method of use including appropriate PPE to be worn',
      value: formData?.ppeData?.HTMLText || 'NA',
      JSONTextArray: formData?.ppeData?.JSONText?.find((list) => list?.children[0]?.text !== ''),
    },
  ];

  const mobilityData = [
    {
      name:
        'Are you able to walk unaided? If NO, what support do you require/use? (wheelchair/hoist/Zimmer/walking stick) How will the risk be minimized?',
      value: formData?.mobilityData?.unaided?.HTMLText || 'NA',
      JSONTextArray: formData?.mobilityData?.unaided?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Are you able to go out alone? If NO, what support do you require? Is there any risk involved? How will the risk be minimized?',
      value: formData?.mobilityData?.alone?.HTMLText || 'NA',
      JSONTextArray: formData?.mobilityData?.alone?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Can you get in and out of bed? If NO, what support do you require? Is there any risk involved? How will the risk be minimized?',
      value: formData?.mobilityData?.outOfBed?.HTMLText || 'NA',
      JSONTextArray: formData?.mobilityData?.outOfBed?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Are you able to use the stairs? If NO, what support do you require? Is there any risk involved? How will the risk be minimized?',
      value: formData?.mobilityData?.stairs?.HTMLText || 'NA',
      JSONTextArray: formData?.mobilityData?.stairs?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Are you able to change position regularly? If NO, please add details-specific bed/chair-support required? Is there any risk involved? How will the risk be minimized?',
      value: formData?.mobilityData?.position?.HTMLText || 'NA',
      JSONTextArray: formData?.mobilityData?.position?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Do you have any tissue viability considerations? Is there any risk involved? If Yes, please add details including support from other health professionals. How will the risk be minimized?',
      value: formData?.mobilityData?.tissueViability?.HTMLText || 'NA',
      JSONTextArray: formData?.mobilityData?.tissueViability?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Have you fallen recently – in 12 months? If Yes, please give details (frequency – Weekly/monthly?) what support do you require? Is there any risk involved? How will the risk be minimized?',
      value: formData?.mobilityData?.fallen?.HTMLText || 'NA',
      JSONTextArray: formData?.mobilityData?.fallen?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Are you able to wash/bath/shower? If No, what assistance do you require? Is there any risk involved? How will the risk be minimized?',
      value: formData?.mobilityData?.wash?.HTMLText || 'NA',
      JSONTextArray: formData?.mobilityData?.wash?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Are you able to dress? If No, what assistance do you require? Is there any risk involved? How will the risk be minimized?',
      value: formData?.mobilityData?.dress?.HTMLText || 'NA',
      JSONTextArray: formData?.mobilityData?.dress?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
  ];

  const practicalTaskData = [
    {
      name:
        'Heating/preparing food and/or Preparing hot/cold drinks? Is there any risk involved? If Yes, please give details? How will the risk be minimized?',
      value: formData?.practicalData?.heat?.HTMLText || 'NA',
      JSONTextArray: formData?.practicalData?.heat?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Housework (general cleaning/ dusting/ironing). If yes, please give details? Is any risk involved? How will the risk be minimized?',
      value: formData?.practicalData?.cleaning?.HTMLText || 'NA',
      JSONTextArray: formData?.practicalData?.cleaning?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Cleaning kitchen/bathroom? Is there any risk involved? If yes, please give details How will the risk be minimized?',
      value: formData?.practicalData?.kitchen?.HTMLText || 'NA',
      JSONTextArray: formData?.practicalData?.kitchen?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Laundry? If yes, please give details? Is there any risk involved? How will the risk be minimized?',
      value: formData?.practicalData?.laundary?.HTMLText || 'NA',
      JSONTextArray: formData?.practicalData?.laundary?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Make bed? If yes, please give details Is there any risk involved? How will the risk be minimized?',
      value: formData?.practicalData?.makeBed?.HTMLText || 'NA',
      JSONTextArray: formData?.practicalData?.makeBed?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Shopping? If yes, please give details is there any risk involved? How will the risk be minimized?',
      value: formData?.practicalData?.shopping?.HTMLText || 'NA',
      JSONTextArray: formData?.practicalData?.shopping?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
  ];

  const moneyData = [
    {
      name: 'Are you to manage your own finances?',
      value: formData?.moneyData?.finances?.HTMLText || 'NA',
      JSONTextArray: formData?.moneyData?.finances?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'If No, what support do you require?',
      value: formData?.moneyData?.support?.HTMLText || 'NA',
      JSONTextArray: formData?.moneyData?.support?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'How will the risk be minimized? Is there any risk involved?',
      value: formData?.moneyData?.risk?.HTMLText || 'NA',
      JSONTextArray: formData?.moneyData?.risk?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
  ];

  const healthData = [
    {
      name:
        'Do you have any health consideration is there any risk involved? that have potential to cause a risk and/or have any been reported RIDDOR?',
      value: formData?.healthData?.riddor?.HTMLText || 'NA',
      JSONTextArray: formData?.healthData?.riddor?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'How will the risk be minimized?',
      value: formData?.healthData?.riskMin?.HTMLText || 'NA',
      JSONTextArray: formData?.healthData?.riskMin?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Is there any risk from the customer or visitor smoking in the property Is there any risk involved?',
      value: formData?.healthData?.smoking?.HTMLText || 'NA',
      JSONTextArray: formData?.healthData?.smoking?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'How will the risk be minimized?',
      value: formData?.healthData?.riskMinSecond?.HTMLText || 'NA',
      JSONTextArray: formData?.healthData?.riskMinSecond?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'If customer is a smoker do, they agree that while our care worker is there, they will not smoke?',
      value: formData?.healthData?.smokerCustomer?.HTMLText || 'NA',
      JSONTextArray: formData?.healthData?.smokerCustomer?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Is there any risk involved?',
      value: formData?.healthData?.riskInvolvement?.HTMLText || 'NA',
      JSONTextArray: formData?.healthData?.riskInvolvement?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'How will the risk be minimized?',
      value: formData?.healthData?.riskMinThird?.HTMLText || 'NA',
      JSONTextArray: formData?.healthData?.riskMinThird?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
  ];

  const homeData = [
    {
      name: 'Does anyone live with you in your home? Is there any risk involved?',
      value: formData?.homeData?.live?.HTMLText || 'NA',
      JSONTextArray: formData?.healthData?.riskMinThird?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'How will the risk be minimized?',
      value: formData?.homeData?.riskMin?.HTMLText || 'NA',
      JSONTextArray: formData?.homeData?.riskMin?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'If Yes, are any of them 16 years old or Is there any risk involved younger?',
      value: formData?.homeData?.young?.HTMLText || 'NA',
      JSONTextArray: formData?.homeData?.young?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'How will the risk be minimized?',
      value: formData?.homeData?.riskMinSecond?.HTMLText || 'NA',
      JSONTextArray: formData?.homeData?.riskMinSecond?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'If you have visitors, is there any have Is there any risk involved potential to cause risk?',
      value: formData?.homeData?.visitor?.HTMLText || 'NA',
      JSONTextArray: formData?.homeData?.visitor?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'How will the risk be minimized?',
      value: formData?.homeData?.riskMinThird?.HTMLText || 'NA',
      JSONTextArray: formData?.homeData?.riskMinThird?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
  ];

  const appliances = [
    {
      name:
        'As far as we are aware, are there any electrical and gas appliances in your home that are not in good working order? Do NOT allow use of any appliance that appears to be faulty: mark those clearly on the Risk Management Plan?',
      value: formData?.appliances?.electrical?.HTMLText || 'NA',
      JSONTextArray: formData?.appliances?.electrical?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'How will the risk be minimized?',
      value: formData?.appliances?.riskMIn?.HTMLText || 'NA',
      JSONTextArray: formData?.appliances?.riskMIn?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
  ];

  const loneWorkData = [
    {
      name: 'Will a member of staff be working alone Is at any visit on the Care/Support Plan?',
      value: formData?.loneWorkData?.staff?.HTMLText || 'NA',
      JSONTextArray: formData?.loneWorkData?.staff?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Is there any risk involved?',
      value: formData?.loneWorkData?.riskInvolved?.HTMLText || 'NA',
      JSONTextArray: formData?.loneWorkData?.riskInvolved?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'How will the risk be minimized?',
      value: formData?.loneWorkData?.riskMin?.HTMLText || 'NA',
      JSONTextArray: formData?.loneWorkData?.riskMin?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Does the location of property or social issues of area cause risk? Is there any risk involved?',
      value: formData?.loneWorkData?.location?.HTMLText || 'NA',
      JSONTextArray: formData?.loneWorkData?.location?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'How will the risk be minimized?',
      value: formData?.loneWorkData?.RiskMinSecond?.HTMLText || 'NA',
      JSONTextArray: formData?.loneWorkData?.RiskMinSecond?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Is there any consideration with the times of the calls? Is there any risk involved?',
      value: formData?.loneWorkData?.timesOfCall?.HTMLText || 'NA',
      JSONTextArray: formData?.loneWorkData?.timesOfCall?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'How will the risk be minimized?',
      value: formData?.loneWorkData?.riskMinThird?.HTMLText || 'NA',
      JSONTextArray: formData?.loneWorkData?.riskMinThird?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Are there any potential risks to a lone worker?',
      value: formData?.loneWorkData?.potentialRisk?.HTMLText || 'NA',
      JSONTextArray: formData?.loneWorkData?.potentialRisk?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Is there any risk involved?',
      value: formData?.loneWorkData?.riskInvolvedSecond?.HTMLText || 'NA',
      JSONTextArray: formData?.loneWorkData?.riskInvolvedSecond?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'How will the risk be minimized?',
      value: formData?.loneWorkData?.riskMinForth?.HTMLText || 'NA',
      JSONTextArray: formData?.loneWorkData?.riskMinForth?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Are there any additional risks to our service user? Please list, with risk level, and how they will be minimized.',
      value: formData?.loneWorkData?.additionalRisk?.HTMLText || 'NA',
      JSONTextArray: formData?.loneWorkData?.additionalRisk?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Overall risks.',
      value: formData?.loneWorkData?.overallRisk?.HTMLText || 'NA',
      JSONTextArray: formData?.loneWorkData?.overallRisk?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name:
        'Where risk is assessed low, medium, or high has the process for informing all staff (regular and irregular) attending the customer been initiated, making them aware of current best practice?',
      value: formData?.loneWorkData?.assessLow?.HTMLText || 'NA',
      JSONTextArray: formData?.loneWorkData?.assessLow?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
  ];

  const otherDetails = [
    {
      name: 'Moving and Handling Risk Assessment',
      value: formData?.otherDetails?.movingRisk?.HTMLText || 'NA',
      JSONTextArray: formData?.otherDetails?.movingRisk?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'COSHH Risk Assessment',
      value: formData?.otherDetails?.coshhRisk?.HTMLText || 'NA',
      JSONTextArray: formData?.otherDetails?.coshhRisk?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'External Activities Risk Assessment',
      value: formData?.otherDetails?.externalActivity?.HTMLText || 'NA',
      JSONTextArray: formData?.otherDetails?.externalActivity?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Name of Service User',
      value: formData?.otherDetails?.name || 'NA',
      JSONTextArray: formData?.otherDetails?.name?.length,
    },
    {
      name: 'Date',
      value: formData?.otherDetails?.date
        ? moment(formData?.otherDetails?.date).format('DD/MM/YYYY')
        : 'NA',
      JSONTextArray: formData?.otherDetails?.date?.length,
    },
  ];

  const descriptionListClientReview = [
    {
      description: 'Do you feel respected, valued and listened to?',
      value: formData?.details?.feeling?.value?.HTMLText || 'NA',
      choice: formData?.details?.feeling?.choice || 'NA',
      JSONTextArray: formData?.details?.feeling?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Is the support flexible and gives you choice?',
      value: formData?.details?.supportFlexible?.value?.HTMLText || 'NA',
      choice: formData?.details?.supportFlexible?.choice || 'NA',
      JSONTextArray: formData?.details?.supportFlexible?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Is the support reliable and timely?',
      value: formData?.details?.supportReliable?.value?.HTMLText || 'NA',
      choice: formData?.details?.supportReliable?.choice || 'NA',
      JSONTextArray: formData?.details?.supportReliable?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Is support that is responsive to your changing needs?',
      value: formData?.details?.supportResponsive?.value?.HTMLText || 'NA',
      choice: formData?.details?.supportResponsive?.choice || 'NA',
      JSONTextArray: formData?.details?.supportResponsive?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Are the care workers staying the full required time?',
      value: formData?.details?.careworkerStay?.value?.HTMLText || 'NA',
      choice: formData?.details?.careworkerStay?.choice || 'NA',
      JSONTextArray: formData?.details?.careworkerStay?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Are the care workers recording in the logs? (Check logbook entries)',
      value: formData?.details?.careworkerRecord?.value?.HTMLText || 'NA',
      choice: formData?.details?.careworkerRecord?.choice || 'NA',
      JSONTextArray: formData?.details?.careworkerRecord?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Are the care workers wearing full PPE ? ( Gloves, Aprons and Mask)',
      value: formData?.details?.careworkerfullPPE?.value?.HTMLText || 'NA',
      choice: formData?.details?.careworkerfullPPE?.choice || 'NA',
      JSONTextArray: formData?.details?.careworkerfullPPE?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
  ];

  const outcomeData = [
    {
      name: 'Maintaining a habitable home environment',
      value: formData?.outcome?.homeEnvironment?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.outcome?.homeEnvironment?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Managing and maintaining nutrition',
      value: formData?.outcome?.nutrition?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.outcome?.nutrition?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Maintaining personal hygiene',
      value: formData?.outcome?.hygiene?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.outcome?.hygiene?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      name: 'Medication needs (Check Mar chart entries)',
      value: formData?.outcome?.medication?.value?.HTMLText || 'NA',
      JSONTextArray: formData?.outcome?.medication?.value?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
  ];

  const reviewListClientReviewForm = [
    {
      description:
        'Are there needs identified on Support Plan that have changed in any way, or are not being fully met, or Support Plan that need to be amended',
      name: formData?.review?.supportPlan?.HTMLText || 'NA',
      JSONTextArray: formData?.review?.supportPlan?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Comment or any Compliments',
      name: formData?.review?.comment?.HTMLText || 'NA',
      JSONTextArray: formData?.review?.comment?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        'Required changes/actions (E.g. reassessment, minor amendment to support plan, change in provision or care worker)',
      name: formData?.review?.changes?.HTMLText || 'NA',
      JSONTextArray: formData?.review?.changes?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
  ];

  const otherInputList = [
    {
      description: 'Description of equipment used',
      value: formData?.details?.equipment?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.equipment?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        'Does the requirement involve strenuous pushing or pulling? Is there any risk involved? Description of risk. How will the risk be minimized?',
      value: formData?.details?.involveStrenuous?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.involveStrenuous?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        'Does the requirement involve twisting or bending or any awkward postures? Is there any risk involved? Description of the risk.',
      value: formData?.details?.involveTwisting?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.involveTwisting?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'How will the risk be minimized?',
      value: formData?.details?.riskMinimize1?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.riskMinimize1?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        "Does the requirement involve insufficient time to work at the customer's own pace, or insufficient rest or recovery? Is there any risk involved?",
      value: formData?.details?.involveTime?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.involveTime?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Description of risk. How will the risk be minimized?',
      value: formData?.details?.riskMinimize2?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.riskMinimize2?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        'Are there any other concerns? Is there any risk involved? Description of risk. How will the risk be minimized?',
      value: formData?.details?.otherRiskConcern?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.otherRiskConcern?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Care workers role.',
      value: formData?.details?.careWorker?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.careWorker?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        'Does the task require special information or training other than manual handling and care worker induction training?',
      value: formData?.details?.specialInfo?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.specialInfo?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        'Does the task require height or strength to be considered? Is there any risk involved? How will the risk be minimized?',
      value: formData?.details?.taskDimensions?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.taskDimensions?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        'Does the task pose a risk to people with health problems or who are pregnant? Is there any risk involved? Description of risk. How will the risk be minimized?',
      value: formData?.details?.healthProblem?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.healthProblem?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        'Does the task require more than one care worker? Is there any risk involved? Description of risk. How will the risk be minimized?',
      value: formData?.details?.moreCareWorker?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.moreCareWorker?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        'Is there insufficient time allocated to complete the task? Is there any risk involved? Description of risk. How will the risk be minimized?',
      value: formData?.details?.insufficientTime?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.insufficientTime?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        'Are there any other concerns? Is there any risk involved? Description of risk. How will the risk be minimized?',
      value: formData?.details?.otherConcerns?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.otherConcerns?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },

    {
      description:
        'Do you have any health issue which need to be considered? e.g. tissue viability/joint problems. Is there any risk involved? Description of risk. How will the risk be minimized?',
      value: formData?.details?.jointProblem?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.jointProblem?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        'Do you have any problems with us supporting? You to be able to carry out the task? Is there any risk involved? Description of risk. How will the risk be minimized?',
      value: formData?.details?.supportProblem?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.supportProblem?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Environment',
      value: formData?.details?.environment?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.environment?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        'Are there any constraints on posture? Is there any risk involved? Description of risk. How will the risk be minimized?',
      value: formData?.details?.posture?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.posture?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        'Are floors surfaces uneven, are there level variations or does the floor covering not allow equipment to move freely? Is there any risk involved? Description of risk. How will the risk be minimized?',
      value: formData?.details?.floorSurface?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.floorSurface?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        'Any space constraints? Is there any risk involved? Description of risk. How will the risk be minimized?',
      value: formData?.details?.spaceConstraint?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.spaceConstraint?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description:
        'Are there any concerns regarding lighting and temperature? Is there any risk involved? Description of risk. How will the risk be minimized?',
      value: formData?.details?.lightConcern?.HTMLText || 'NA',
      JSONTextArray: formData?.details?.lightConcern?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
  ];
  const visitingDetails = [
    {
      description: 'Medical condition ',
      value: formData?.medicalCondition?.HTMLText || 'NA',
      JSONTextArray: formData?.medicalCondition?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Morning visit (days and times of the visit)',
      value: formData?.morningVisit || 'NA',
      JSONTextArray: formData?.morningVisit?.length,
    },
    {
      description: 'Morning visit descriptioin',
      value: formData?.morningVisitDescription?.HTMLText || 'NA',
      JSONTextArray: formData?.morningVisitDescription?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Expected outcome and how it will be achieved?',
      value: formData?.outcomeMorningVisit || 'NA',
      JSONTextArray: formData?.outcomeMorningVisit?.length,
    },
    {
      description: 'Lunch visit (days and times of the visit)',
      value: formData?.lunchVisit || 'NA',
      JSONTextArray: formData?.lunchVisit?.length,
    },
    {
      description: 'Lunch visit descriptioin',
      value: formData?.lunchVisitDescription?.HTMLText || 'NA',
      JSONTextArray: formData?.lunchVisitDescription?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Expected outcome and how it will be achieved?',
      value: formData?.outcomeLunchVisit || 'NA',
      JSONTextArray: formData?.outcomeLunchVisit?.length,
    },
    {
      description: 'Tea visit (days and times of the visit)',
      value: formData?.teaVisit || 'NA',
      JSONTextArray: formData?.teaVisit?.length,
    },
    {
      description: 'Tea visit descriptioin',
      value: formData?.teaVisitDescription?.HTMLText || 'NA',
      JSONTextArray: formData?.teaVisitDescription?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Expected outcome and how it will be achieved?',
      value: formData?.outcomeTeaVisit || 'NA',
      JSONTextArray: formData?.outcomeTeaVisit?.length,
    },
    {
      description: 'Night visit (days and times of the visit)',
      value: formData?.nightVisit || 'NA',
      JSONTextArray: formData?.nightVisit?.length,
    },
    {
      description: 'Night visit descriptioin',
      value: formData?.nightVisitDescription?.HTMLText || 'NA',
      JSONTextArray: formData?.nightVisitDescription?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Expected outcome and how it will be achieved?',
      value: formData?.outcomeNightVisit || 'NA',
      JSONTextArray: formData?.outcomeNightVisit?.length,
    },
    {
      description:
        'I also would like some support with (domestic, shopping, laundry, companionships outreach).',
      value: formData?.support?.HTMLText || 'NA',
      JSONTextArray: formData?.support?.JSONText?.find((list) => list?.children[0]?.text !== ''),
    },
    {
      description: 'Expected outcome and how it will be achieved?',
      value: formData?.outcomeSupport || 'NA',
      JSONTextArray: formData?.outcomeSupport?.length,
    },
  ];

  const currentSupportNetwork = [
    {
      description:
        'Things like – Where you were born, where did you grow up, do you or did you have a career, what do you like doing, what is your favorite food/drink, what is your favorite past time?',
      value: formData?.currentSupportNetwork?.generalWhereAbouts?.HTMLText || 'NA',
      JSONTextArray: formData?.currentSupportNetwork?.generalWhereAbouts?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Your interests/hobbies – what do you like to do?',
      value: formData?.currentSupportNetwork?.interests || 'NA',
      JSONTextArray: formData?.currentSupportNetwork?.interests?.length,
    },
    {
      description: 'What do you expect from your care & support workers?',
      value: formData?.currentSupportNetwork?.expectations || 'NA',
      JSONTextArray: formData?.currentSupportNetwork?.expectations?.length,
    },
    {
      description: 'What medication support you required?',
      value: formData?.currentSupportNetwork?.medications || 'NA',
      JSONTextArray: formData?.currentSupportNetwork?.medications?.length,
    },
  ];

  const myDetailsSupprtPlan = [
    {
      description: 'Full Name',
      value: formData?.myDetails?.fullName || 'NA',
      JSONTextArray: formData?.myDetails?.fullName?.length,
    },
    {
      description: 'Address',
      value: formData?.myDetails?.address || 'NA',
      JSONTextArray: formData?.myDetails?.address?.length,
    },
    {
      description: 'Religion / Language',
      value: formData?.myDetails?.language || 'NA',
      JSONTextArray: formData?.myDetails?.language?.length,
    },
    {
      description: 'Contact Number',
      value: formData?.contactNumber || 'NA',
      JSONTextArray: formData?.contactNumber?.length,
    },
    {
      description: 'Date of Birth',
      value: formData?.dateOfBirth ? moment(formData?.dateOfBirth).format('DD/MM/YYYY') : 'NA',
      JSONTextArray: formData?.dateOfBirth?.length,
    },
    {
      description: 'Access',
      value: formData?.access || 'NA',
      JSONTextArray: formData?.access?.length,
    },
    {
      description: 'Next of Kin details 1 Contact Number & Email Address',
      value: formData?.myDetails?.kinDetail1?.HTMLText || 'NA',
      JSONTextArray: formData?.myDetails?.kinDetail1?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Next of Kin details 2 Contact Number & Email Address',
      value: formData?.myDetails?.kinDetail2?.HTMLText || 'NA',
      JSONTextArray: formData?.myDetails?.kinDetail2?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'GP details Contact Number & Email Address',
      value: formData?.myDetails?.gpDetails?.HTMLText || 'NA',
      JSONTextArray: formData?.myDetails?.gpDetails?.JSONText?.find(
        (list) => list?.children[0]?.text !== '',
      ),
    },
    {
      description: 'Do you have pets?',
      value: formData?.myDetails?.havePets || 'NA',
      JSONTextArray: formData?.myDetails?.havePets?.length,
    },
    {
      description: 'Start date of service',
      value: formData?.myDetails?.serviceStartDate
        ? moment(formData?.myDetails?.serviceStartDate).format('DD/MM/YYYY')
        : 'NA',
      JSONTextArray: formData?.myDetails?.serviceStartDate?.length,
    },
    {
      description: 'Do you have any difficulties communicating your needs? if yes give details.',
      value: formData?.myDetails?.communicatingDifficulties || 'NA',
      JSONTextArray: formData?.myDetails?.communicatingDifficulties?.length,
    },
  ];

  const individualDetailPayingForService = [
    {
      description: 'Full Name',
      value: formData?.payingIndividual?.fullName || 'NA',
    },
    {
      description: 'Address',
      value: formData?.payingIndividual?.address || 'NA',
    },
    {
      description: 'Postcode',
      value: formData?.payingIndividual?.postCode || 'NA',
    },
    {
      description: 'Contact Number',
      value: formData?.payingIndividual?.contactNumber || 'NA',
    },
    {
      description: 'Email',
      value: formData?.payingIndividual?.email || 'NA',
    },
    {
      description: 'Relationship to client',
      value: formData?.payingIndividual?.relationship || 'NA',
    },
    {
      description:
        'We want to ensure we communicate with you effectively about our service. What’s the best way if we cannot reach you on telephone?',
      value: formData?.payingIndividual?.wayToReach || 'NA',
    },
    {
      description: 'Capacity/Consent - Does the customer have capacity?',
      value: formData?.payingIndividual?.capacity || 'NA',
    },
  ];

  return (
    <div className="">
      <div className="mx-auto" ref={reff} style={{ width: '875px' }}>
        <div className="bg-white rounded mb-4 px-8 py-4">
          <Skeleton loading={loading}>
            <div className="flex justify-between">
              <div>
                <img src={Logo} width="113px" height="51px" alt="logo" />
              </div>
              <div className="text-md text-right">
                FORM # <span className="font-bold">{formData?.form_id || 'NA'}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className={classNames(styles.headingLeftBorder)} />

              <div className="text-center font-bold">
                {type === 'supportPlanForm' && (
                  <>
                    <div>SUPPORT</div>
                    <div>PLAN FORM</div>
                  </>
                )}
                {type === 'clientReviewForm' && (
                  <>
                    <div>CLIENT</div>
                    <div>REVIEW FORM</div>
                  </>
                )}
                {type === 'mentalCapacityForm' && (
                  <>
                    <div>MENTAL</div>
                    <div>CAPACITY FORM</div>
                  </>
                )}
                {type === 'riskAssessmentForm' && (
                  <>
                    <div>RISK</div>
                    <div>ASSESSMENT FORM</div>
                  </>
                )}
                {type === 'telephoneMonitoring' && (
                  <>
                    <div>TELEPHONE</div>
                    <div>MONITORING FORM</div>
                  </>
                )}
                {type === 'riskAssessmentFormCoshh' && (
                  <>
                    <div>RISK ASSESSMENT FORM </div>
                    <div>- COSHH</div>
                  </>
                )}
                {type === 'movingAndHandlingForm' && (
                  <>
                    <div>MOVING AND HANDLING</div>
                    <div>FORM</div>
                  </>
                )}
              </div>

              <div className={classNames(styles.headingRightBorder)} />
            </div>
            <>
              <div className="flex justify-between mt-2">
                <div className="font-bold capitalize">{formData?.serviceUser || 'NA'}</div>

                {type === 'supportPlanForm' && (
                  <div className="text-md text-right">
                    PREFER TO BE CALLED{' '}
                    <span className="font-bold">{formData?.preferredName || 'NA'}</span>
                  </div>
                )}
                {type === 'mentalCapacityForm' && (
                  <div className="text-md text-right">
                    DATE{' '}
                    <span className="font-bold">
                      {formData?.date1 ? moment(formData?.date1).format('DD/MM/YYYY') : 'NA'}
                    </span>
                  </div>
                )}
                {type === 'clientReviewForm' && (
                  <div className="text-md text-right">
                    DATE{' '}
                    <span className="font-bold">
                      {formData?.dateOfReview1
                        ? moment(formData?.dateOfReview1).format('DD/MM/YYYY')
                        : 'NA'}
                    </span>
                  </div>
                )}
                {type === 'telephoneMonitoring' && (
                  <div className="text-md text-right">
                    DATE{' '}
                    <span className="font-bold">
                      {formData?.date ? moment(formData?.date).format('DD/MM/YYYY') : 'NA'}
                    </span>
                  </div>
                )}
              </div>
            </>
            {type === 'clientReviewForm' && (
              <>
                <div className="flex justify-between mt-4">
                  <div>
                    <div>Persons present at review</div>
                    <div className="font-bold capitalize">{formData?.presentReview || 'NA'}</div>
                  </div>
                  <div className="text-right">
                    <div>Date of initial support plan</div>
                    <div className="font-bold capitalize">
                      {formData?.dateOfInitialsupport
                        ? moment(formData?.dateOfInitialsupport).format('DD/MM/YYYY')
                        : 'NA'}
                    </div>
                  </div>
                </div>
              </>
            )}
            {type === 'telephoneMonitoring' && (
              <>
                <div className="flex justify-between mt-2">
                  <div>
                    <div>Name of person spoken to</div>
                    <div className="font-bold capitalize">{formData?.spokenPerson || 'NA'}</div>
                  </div>
                  <div className="text-right">
                    <div>Name of person making call</div>
                    <div className="font-bold capitalize">{formData?.makingCall || 'NA'}</div>
                  </div>
                </div>
              </>
            )}
            <Divider style={{ 'background-color': 'black' }} />
            {type === 'telephoneMonitoring' &&
              descriptionListTelephoneMonitoringForm?.map((list) => (
                <>
                  <div className="mt-4">
                    <div className="font-semibold">{list?.name || 'NA'}</div>
                    <div className="mt-1">
                      <Button type="primary" size="smail">
                        {list?.choice || 'NA'}
                      </Button>
                    </div>

                    <div className="text-gray-900 mt-1 text-sm">
                      {' '}
                      {list?.JSONTextArray ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: list?.value,
                          }}
                        />
                      ) : (
                        'NA'
                      )}
                    </div>
                  </div>
                </>
              ))}
            {type === 'riskAssessmentFormCoshh' &&
              basicDetails?.map((detail) => (
                <>
                  <div className="mt-4">
                    <div className="font-semibold">{detail?.name || 'NA'}</div>
                    <div className="text-gray-900 mt-1 text-sm">
                      {detail?.JSONTextArray ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: detail?.value,
                          }}
                        />
                      ) : (
                        'NA'
                      )}
                    </div>
                  </div>
                </>
              ))}
            {type === 'telephoneMonitoring' && (
              <>
                <div className="mt-4">
                  <div className="font-semibold">
                    Is there anything else you would like to tell us? This might be about the
                    quality of the care or support you are receiving or anything else?{' '}
                  </div>
                  <div className="text-gray-900 mt-1">{formData?.careSupport || 'NA'}</div>
                </div>

                <div className="mt-4">
                  <div className="font-semibold mb-2">
                    If any of the above answers are &apos;NO&apos;, records comments above and
                    transfer to an improvement logs on carefree.
                  </div>
                  <div className="font-semibold">Date improvements logged on complaint folder</div>
                  <div className="text-gray-900 mt-1">
                    {formData?.improvementDate
                      ? moment(formData?.improvementDate).format('DD/MM/YYYY')
                      : 'NA'}
                  </div>
                </div>
              </>
            )}
            {type === 'riskAssessmentFormCoshh' && (
              <>
                <div className="mt-4">
                  <div className="font-semibold">Risk Rating</div>
                  <div className="text-gray-900 mt-1">{formData?.riskRating?.choice || 'NA'}</div>
                </div>

                <div className="mt-4">
                  <div className="font-semibold">Assessment Date</div>
                  <div className="text-gray-900 mt-1">
                    {' '}
                    {formData?.assessmentDate
                      ? moment(formData?.assessmentDate).format('DD/MM/YYYY')
                      : 'NA'}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="font-semibold">Further Action Required</div>
                  <div className="text-gray-900 mt-1 capitalize">
                    {formData?.actionData || 'NA'}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="font-semibold">Action Review Date</div>
                  <div className="text-gray-900 mt-1 capitalize">
                    {formData?.reviewDate
                      ? moment(formData?.reviewDate).format('DD/MM/YYYY')
                      : 'NA'}
                  </div>
                </div>
                <div className="mt-4">
                  <span className="formLabel">Signature</span>
                  <div className="w-64 h-20 bg-gray-300 border my-2" />
                </div>
              </>
            )}
            {type === 'riskAssessmentForm' && (
              <>
                <div className="mt-4">
                  <span className="formLabel">
                    Medical history (including allergies): What support you require for medication?
                  </span>
                  <div className="text-gray-900 mt-1">
                    {formData?.medicalHistory?.JSONText[0]?.children[0]?.text?.length > 0 ? (
                      <div
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                          __html: formData?.medicalHistory?.HTMLText,
                        }}
                      />
                    ) : (
                      'NA'
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="font-semibold mb-2">
                    List current Medication if we are supporting with administration of medication
                    consult MAR chart List? If reminding from blister pack – refer to the list on
                    the blister for most current medication.
                  </div>

                  {basicDetailsRiskAssessment?.map((detail) => (
                    <div className="mt-4">
                      <div className="font-semibold">{detail?.name || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {detail?.JSONTextArray ? (
                          <div
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{
                              __html: detail?.value,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <div className="font-semibold mb-2">My Current Support Networks</div>
                  {networkData?.map((data) => (
                    <div className="mt-4">
                      <div className="font-semibold">{data?.name || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {data?.JSONTextArray ? (
                          <div
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{
                              __html: data?.value,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-semibold mb-2">Mobility</div>
                  {mobilityData?.map((data) => (
                    <div className="mt-4">
                      <div className="font-semibold">{data?.name || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {data?.JSONTextArray ? (
                          <div
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{
                              __html: data?.value,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-semibold mb-2">
                    Practical Tasks – Do you require any assistance with any of the following?
                  </div>
                  {practicalTaskData?.map((data) => (
                    <div className="mt-4">
                      <div className="font-semibold">{data?.name || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {data?.JSONTextArray ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data?.value,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <div className="font-semibold mb-2">Money/Financial Transactions</div>
                  {moneyData?.map((data) => (
                    <div className="mt-4">
                      <div className="font-semibold">{data?.name || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {data?.JSONTextArray ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data.value,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-semibold mb-2">Your General and Physical Health</div>
                  {healthData?.map((list) => (
                    <div className="mt-4">
                      <div className="font-semibold">{list?.name || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {list?.JSONTextArray ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: list?.value,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-semibold mb-2">About Your Home</div>
                  {homeData?.map((data) => (
                    <div className="mt-4">
                      <div className="font-semibold">{data?.name || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {data?.JSONTextArray ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data?.value,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-semibold mb-2">Your Electrical and Gas Appliances</div>
                  {appliances?.map((item) => (
                    <div className="mt-4">
                      <div className="font-semibold">{item?.name || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {item?.JSONTextArray ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.value,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-semibold mb-2">Lone Working</div>
                  {loneWorkData?.map((data) => (
                    <div className="mt-4">
                      <div className="font-semibold">{data?.name || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {data?.JSONTextArray ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data?.value,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-semibold mb-2">Are other Risk Assessment Required?</div>
                  {otherDetails?.map((detail) => (
                    <div className="mt-4">
                      <div className="font-semibold">{detail?.name || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {detail?.JSONTextArray ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: detail?.value,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <span className="formLabel">Signature</span>
                  <div className="w-64 h-20 bg-gray-300 border my-2" />
                </div>
              </>
            )}
            {type === 'mentalCapacityForm' && (
              <>
                <div className="mt-4">
                  <div className="font-semibold mb-2">
                    This assessment is for service user aged 16 and over and in relation to the
                    decision making to this service user care and support from AMI Home Care.
                    Remember, individuals can lack capacity to make some decisions but have capacity
                    to make others, so it is vital to consider whether the individual lack capacity
                    to make the specific decision.
                  </div>

                  <div className="mt-4">
                    <div className="font-semibold">
                      Does the individual have an impairment of, or a disturbance in the functioning
                      of their mind or brain, whether as a result of a condition, illness, or
                      external facts, such as alcohol or drug use e.g. demantia, severe learning
                      disability, brain injury, mental health condition, stroke, unconsciousness
                      caused by a sudden accident/anesthic. This could be temporary impairment e.g.
                      alcohol excess
                    </div>
                    <div className="text-gray-900 mt-1 text-sm">
                      {formData?.serviceUserData?.JSONText[0]?.children[0]?.text?.length > 0 ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: formData?.serviceUserData?.HTMLText,
                          }}
                        />
                      ) : (
                        'NA'
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold">
                      Does the impairment or disturbance mean the individual is unable to make a
                      specific decision when they need to in relation to their care support from
                      AMI. Remember the MCA says a person is unable to make a decision if they
                      cannot:
                    </div>
                    <div>
                      {boldList.map((list) => (
                        <div className="flex items-center" key={list.value}>
                          <div
                            style={{ backgroundColor: '#9D1D5A' }}
                            className="w-2 h-2 mr-3 rounded-full"
                          />
                          <div key={list.value || 'NA'}>{list.text || 'NA'}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold">
                      If customer is not able to do any of the above three things or communicate
                      their decision (by talking, using sign language, or through other means), the
                      customer will be treated as unable to make the specific decision in question.
                    </div>
                    <div className="text-gray-900 mt-1 text-sm">
                      {formData?.specificDecisionData?.JSONText[0]?.children[0]?.text?.length >
                      0 ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: formData?.specificDecisionData?.HTMLText,
                          }}
                        />
                      ) : (
                        'NA'
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold">
                      If above answer is NO, you do not need to be complete the rest of the form.
                      The customer is able to make their own decisions. Remember to continue
                      reviewing the customer and complete another form if the mental capacity
                      changes. If YES, please continue to next question.
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold">
                      Please record more details of the potential decisions care workers / managers
                      may make in the customers best interest. Individual is unable to make a
                      specific decision when they need to in relation to their care and support plan
                      form AMI?
                    </div>
                    <div className="text-gray-900 mt-1 text-sm">
                      {formData?.supportAmi?.JSONText[0]?.children[0]?.text?.length > 0 ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: formData?.supportAmi?.HTMLText,
                          }}
                        />
                      ) : (
                        'NA'
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold">Print Name</div>
                    <div className="text-gray-900 capitalize mt-1 text-sm">
                      {formData?.printName || 'NA'}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold">Date</div>
                    <div className="text-gray-900 mt-1 text-sm">
                      {formData?.date2 ? moment(formData?.date2).format('DD/MM/YYYY') : 'NA'}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold">Customer or Customer Representative</div>
                    <div className="text-gray-900 capitalize mt-1 text-sm">
                      {formData?.customer || 'NA'}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold">Date</div>
                    <div className="text-gray-900 mt-1 text-sm">
                      {' '}
                      {formData?.date3 ? moment(formData?.date3).format('DD/MM/YYYY') : 'NA'}
                    </div>
                  </div>
                </div>
              </>
            )}
            {type === 'clientReviewForm' && (
              <>
                <div className="mt-4">
                  <div className="font-semibold">The purpose of your review is</div>
                  <div className="text-gray-900 mt-1 text-sm">
                    {boldListClientReviewForm.map((list) => (
                      <div className="flex items-center" key={list.value}>
                        <div
                          style={{ backgroundColor: '#9D1D5A' }}
                          className="w-2 h-2 mr-3 rounded-full"
                        />
                        <div key={list.value}>{list.text || 'NA'}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="my-6">
                  <div className="font-semibold">Type of Review</div>
                  <div className="mt-1">
                    <Button type="primary" size="smail">
                      {formData?.reviewType?.choice || 'NA'}
                    </Button>
                  </div>
                  <div className="text-gray-900 mt-1 text-sm">
                    {formData?.reviewType?.value?.JSONText[0]?.children[0]?.text?.length > 0 ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: formData?.reviewType?.value?.HTMLText,
                        }}
                      />
                    ) : (
                      'NA'
                    )}
                  </div>
                </div>

                {descriptionListClientReview?.map((list) => (
                  <div className="mt-2">
                    <div className="font-semibold">{list?.description || 'NA'}</div>
                    <div className="mt-1">
                      <Button type="primary" size="smail">
                        {list?.choice || 'NA'}
                      </Button>
                    </div>
                    <div className="text-gray-900 mt-1 text-sm">
                      {list?.JSONTextArray ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: list?.value,
                          }}
                        />
                      ) : (
                        'NA'
                      )}
                    </div>
                  </div>
                ))}
                <div className="mt-4">
                  <div className="font-semibold mb-2">
                    How well do you consider that the outcomes on your support plan have been
                    achieved?
                  </div>
                  {outcomeData?.map((data) => (
                    <div className="mt-4">
                      <div className="font-semibold">{data?.name || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {data?.JSONTextArray ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data?.value,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  {reviewListClientReviewForm?.map((list) => (
                    <div className="mt-4">
                      <div className="font-semibold">{list?.description || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {list?.JSONTextArray ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: list?.name,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-semibold mb-2">
                    Agreement to your review (If you agree with your review, please sign below)
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div>
                    <div>Name of service user</div>
                    <div className="font-bold capitalize">{formData?.serviceUser2 || 'NA'}</div>
                  </div>
                  <div className="text-right">
                    <div>Date of Review</div>
                    <div className="font-bold ">
                      {' '}
                      {formData?.dateOfReview2
                        ? moment(formData?.dateOfReview2).format('DD/MM/YYYY')
                        : 'NA'}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="formLabel">Signature</span>
                  <div className="w-64 h-20 bg-gray-300 border my-2" />
                </div>
                <div className="mt-4">
                  <div className="font-semibold mb-2">Review completed by</div>
                </div>

                <div className="flex justify-between mt-2">
                  <div>
                    <div>Name of reviewer</div>
                    <div className="font-bold capitalize">{formData?.reviewerName || 'NA'}</div>
                  </div>
                  <div className="text-right">
                    <div>Date of Review</div>
                    <div className="font-bold ">
                      {formData?.reviewerDate
                        ? moment(formData?.reviewerDate).format('DD/MM/YYYY')
                        : 'NA'}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="formLabel">Signature</span>
                  <div className="w-64 h-20 bg-gray-300 border my-2" />
                </div>
              </>
            )}
            {type === 'movingAndHandlingForm' && (
              <>
                <div className="mt-4">
                  {otherInputList?.map((list) => (
                    <div className="mt-4">
                      <div className="font-semibold">{list?.description || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {list?.JSONTextArray ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: list?.value,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <div>
                    <div>Completed by</div>
                    <div className="font-bold capitalize">{formData?.completedBy || 'NA'}</div>
                  </div>
                  <div className="text-right">
                    <div>Date</div>
                    <div className="font-bold ">
                      {formData?.date ? moment(formData?.date).format('DD/MM/YYYY') : 'NA'}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="">Next Assessment due</div>
                  <div className="font-bold">
                    {formData?.assignmentDate
                      ? moment(formData?.assignmentDate).format('DD/MM/YYYY')
                      : 'NA'}
                  </div>
                </div>
              </>
            )}
            {type === 'supportPlanForm' && (
              <>
                <div className="mt-4">
                  {visitingDetails?.map((detail) => (
                    <div className="mt-4">
                      <div className="font-semibold">{detail?.description || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {detail?.JSONTextArray ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: detail?.value,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-semibold mb-2">My Current Support Networks</div>
                  {currentSupportNetwork?.map((data) => (
                    <div className="mt-4">
                      <div className="font-semibold">{data?.description || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {data?.JSONTextArray ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data?.value,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-semibold mb-2">My Details</div>
                  {myDetailsSupprtPlan?.map((detail) => (
                    <div className="mt-4">
                      <div className="font-semibold">{detail?.description || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">
                        {detail?.JSONTextArray ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: detail?.value,
                            }}
                          />
                        ) : (
                          'NA'
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-semibold mb-2">
                    Details of individual paying for the service
                  </div>
                  {individualDetailPayingForService?.map((detail) => (
                    <div className="mt-4">
                      <div className="font-semibold">{detail?.description || 'NA'}</div>
                      <div className="text-gray-900 mt-1 text-sm">{detail?.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="">
                    If Yes, do they give consent for their NOK to be involved in agreeing Support
                    Plan and be a part of the assessment process and are they happy for us to
                    contact their NOK to carry out reviews and discuss their care plan with them?
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold">Please Write the names here</div>
                    <div className="text-gray-900 mt-1 text-sm">
                      {formData?.payingIndividual?.namesConcentYes || 'NA'}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="">
                    If NO, does NOK/Advocate/Social Service have legal power of attorney or do we
                    have best interest /mental capacity meeting notes to make decisions for customer
                    and agree the Care Plan (evidence of this to be obtained and filed in customers
                    file)
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold">Please Write the names here</div>
                    <div className="text-gray-900 mt-1 text-sm">
                      {formData?.payingIndividual?.namesConcentNo || 'NA'}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <div>
                    <div>Name of Service User</div>
                    <div className="font-bold capitalize">
                      {formData?.payingIndividual?.serviceUser || 'NA'}
                    </div>
                  </div>
                  <div className="text-right">
                    <div>Date</div>
                    <div className="font-bold ">
                      {formData?.payingIndividual?.date
                        ? moment(formData?.payingIndividual?.date).format('DD/MM/YYYY')
                        : 'NA'}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="formLabel">Signature</span>
                  <div className="w-64 h-20 bg-gray-300 border my-2" />
                </div>
              </>
            )}
          </Skeleton>
        </div>
      </div>
    </div>
  );
};

export default connect(({ forms, loading }) => ({
  formData: forms.formData,
  loading: loading.effects['forms/getFormData'],
}))(PrintPreview);
