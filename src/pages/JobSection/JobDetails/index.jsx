import React, { Component } from 'react';
import { Tag, Input, Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';
import CardSection from '@/components/CardSection';

class JobDetails extends Component {
  state = {
    tags: ['Single', 'Married', 'Divorce'],
    inputVisible: false,
    inputValue: '',
  };

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter((tag) => tag !== removedTag);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = (input) => {
    this.input = input;
  };

  forMap = (tag) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          this.handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    const tagChild = tags.map(this.forMap);
    return (
      <PageHeaderWrapper>
        <CardSection
          className="mt-4"
          leftContent={
            <div className="pr-8 ">
              <div className="text-blue-900 font-semibold text-xl">Job Title</div>
            </div>
          }
          rightContent={
            <div className="p-4 shadow bg-white rounded">
              <div style={{ marginBottom: 16 }}>
                <TweenOneGroup
                  enter={{
                    scale: 0.8,
                    opacity: 0,
                    type: 'from',
                    duration: 100,
                    onComplete: (e) => {
                      e.target.style = '';
                    },
                  }}
                  leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                  appear={false}
                >
                  {tagChild}
                </TweenOneGroup>
              </div>
              {inputVisible && (
                <Input
                  ref={this.saveInputRef}
                  type="text"
                  size="small"
                  style={{ width: 78 }}
                  value={inputValue}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputConfirm}
                  onPressEnter={this.handleInputConfirm}
                />
              )}
              {!inputVisible && (
                <Tag onClick={this.showInput} className="site-tag-plus">
                  <PlusOutlined /> New Tag
                </Tag>
              )}

              <div>
                <Button type="primary" className="mt-4 mb-4 p-4">
                  Save
                </Button>
              </div>
            </div>
          }
        />

        <CardSection
          className="mt-4"
          leftContent={
            <div className="pr-8 ">
              <div className="text-blue-900 font-semibold text-xl">Company</div>
            </div>
          }
          rightContent={
            <div className="p-4 shadow bg-white rounded">
              <div style={{ marginBottom: 16 }}>
                <TweenOneGroup
                  enter={{
                    scale: 0.8,
                    opacity: 0,
                    type: 'from',
                    duration: 100,
                    onComplete: (e) => {
                      e.target.style = '';
                    },
                  }}
                  leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                  appear={false}
                >
                  {tagChild}
                </TweenOneGroup>
              </div>
              {inputVisible && (
                <Input
                  ref={this.saveInputRef}
                  type="text"
                  size="small"
                  style={{ width: 78 }}
                  value={inputValue}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputConfirm}
                  onPressEnter={this.handleInputConfirm}
                />
              )}
              {!inputVisible && (
                <Tag onClick={this.showInput} className="site-tag-plus">
                  <PlusOutlined /> New Tag
                </Tag>
              )}

              <div>
                <Button type="primary" className="mt-4 mb-4 p-4">
                  Save
                </Button>
              </div>
            </div>
          }
        />

        <CardSection
          className="mt-4"
          leftContent={
            <div className="pr-8 ">
              <div className="text-blue-900 font-semibold text-xl">Type of Job</div>
            </div>
          }
          rightContent={
            <div className="p-4 shadow bg-white rounded">
              <div style={{ marginBottom: 16 }}>
                <TweenOneGroup
                  enter={{
                    scale: 0.8,
                    opacity: 0,
                    type: 'from',
                    duration: 100,
                    onComplete: (e) => {
                      e.target.style = '';
                    },
                  }}
                  leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                  appear={false}
                >
                  {tagChild}
                </TweenOneGroup>
              </div>
              {inputVisible && (
                <Input
                  ref={this.saveInputRef}
                  type="text"
                  size="small"
                  style={{ width: 78 }}
                  value={inputValue}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputConfirm}
                  onPressEnter={this.handleInputConfirm}
                />
              )}
              {!inputVisible && (
                <Tag onClick={this.showInput} className="site-tag-plus">
                  <PlusOutlined /> New Tag
                </Tag>
              )}

              <div>
                <Button type="primary" className="mt-4 mb-4 p-4">
                  Save
                </Button>
              </div>
            </div>
          }
        />

        <CardSection
          className="mt-4"
          leftContent={
            <div className="pr-8 ">
              <div className="text-blue-900 font-semibold text-xl">What's the Pay</div>
            </div>
          }
          rightContent={
            <div className="p-4 shadow bg-white rounded">
              <div style={{ marginBottom: 16 }}>
                <TweenOneGroup
                  enter={{
                    scale: 0.8,
                    opacity: 0,
                    type: 'from',
                    duration: 100,
                    onComplete: (e) => {
                      e.target.style = '';
                    },
                  }}
                  leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                  appear={false}
                >
                  {tagChild}
                </TweenOneGroup>
              </div>
              {inputVisible && (
                <Input
                  ref={this.saveInputRef}
                  type="text"
                  size="small"
                  style={{ width: 78 }}
                  value={inputValue}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputConfirm}
                  onPressEnter={this.handleInputConfirm}
                />
              )}
              {!inputVisible && (
                <Tag onClick={this.showInput} className="site-tag-plus">
                  <PlusOutlined /> New Tag
                </Tag>
              )}

              <div>
                <Button type="primary" className="mt-4 mb-4 p-4">
                  Save
                </Button>
              </div>
            </div>
          }
        />

        <CardSection
          className="mt-4"
          leftContent={
            <div className="pr-8 ">
              <div className="text-blue-900 font-semibold text-xl">Work Location</div>
            </div>
          }
          rightContent={
            <div className="p-4 shadow bg-white rounded">
              <div style={{ marginBottom: 16 }}>
                <TweenOneGroup
                  enter={{
                    scale: 0.8,
                    opacity: 0,
                    type: 'from',
                    duration: 100,
                    onComplete: (e) => {
                      e.target.style = '';
                    },
                  }}
                  leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                  appear={false}
                >
                  {tagChild}
                </TweenOneGroup>
              </div>
              {inputVisible && (
                <Input
                  ref={this.saveInputRef}
                  type="text"
                  size="small"
                  style={{ width: 78 }}
                  value={inputValue}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputConfirm}
                  onPressEnter={this.handleInputConfirm}
                />
              )}
              {!inputVisible && (
                <Tag onClick={this.showInput} className="site-tag-plus">
                  <PlusOutlined /> New Tag
                </Tag>
              )}

              <div>
                <Button type="primary" className="mt-4 mb-4 p-4">
                  Save
                </Button>
              </div>
            </div>
          }
        />

        <CardSection
          className="mt-4"
          leftContent={
            <div className="pr-8 ">
              <div className="text-blue-900 font-semibold text-xl">Date Posted</div>
            </div>
          }
          rightContent={
            <div className="p-4 shadow bg-white rounded">
              <div style={{ marginBottom: 16 }}>
                <TweenOneGroup
                  enter={{
                    scale: 0.8,
                    opacity: 0,
                    type: 'from',
                    duration: 100,
                    onComplete: (e) => {
                      e.target.style = '';
                    },
                  }}
                  leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                  appear={false}
                >
                  {tagChild}
                </TweenOneGroup>
              </div>
              {inputVisible && (
                <Input
                  ref={this.saveInputRef}
                  type="text"
                  size="small"
                  style={{ width: 78 }}
                  value={inputValue}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputConfirm}
                  onPressEnter={this.handleInputConfirm}
                />
              )}
              {!inputVisible && (
                <Tag onClick={this.showInput} className="site-tag-plus">
                  <PlusOutlined /> New Tag
                </Tag>
              )}

              <div>
                <Button type="primary" className="mt-4 mb-4 p-4">
                  Save
                </Button>
              </div>
            </div>
          }
        />
        {/* <FooterToolbar>
        <Button type="primary" onClick={() => form.submit()}>
          Create Test
        </Button>
      </FooterToolbar> */}
      </PageHeaderWrapper>
    );
  }
}

export default JobDetails;
