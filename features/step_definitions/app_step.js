const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { createResource, readResource, updateResource, deleteResource } = require('../../database');
Given('I have a new resource', function () {
  this.resource = { data: 'data' };
});

When('I create the resource', function () {
  this.resourceId = createResource(this.resource);
});

Then('the resource should be created', function () {
  expect(this.resourceId).to.not.be.null;
});

Given('I have a created resource', function () {
  this.resourceId = createResource({ data: 'data' });
});

When('I read the resource', function () {
  this.resource = readResource(this.resourceId);
});

Then('the resource should be read', function () {
  expect(this.resource.data).to.equal('data');
});

When('I update the resource', function () {
  this.updateSuccess = updateResource(this.resourceId, { data: 'updated data' });
});

Then('the resource should be updated', function () {
  expect(this.updateSuccess).to.be.true;
  this.resource = readResource(this.resourceId);
  expect(this.resource.data).to.equal('updated data');
});

When('I delete the resource', function () {
  this.deleteSuccess = deleteResource(this.resourceId);
});

Then('the resource should be deleted', function () {
  expect(this.deleteSuccess).to.be.true;
  this.resource = readResource(this.resourceId);
  expect(this.resource).to.be.null;
});