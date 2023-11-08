import 'reflect-metadata';
import Constants from '../util/constants/Constants';
import { MetadataDispatcher } from '../util/helpers/MetadataDispatcher';
import { injectable } from 'inversify';
import { type CDSTyperEntity } from '../util/types/types';

/**
 *

 * @param {CDSTyperEntity<T>} entity - The entity to  with the  .
 */

function EntityHandler<T, Target extends new (...args: never) => unknown>(entity: CDSTyperEntity<T>) {
  return function (target: Target) {
    const metadataDispatcher = new MetadataDispatcher(target, Constants.DECORATOR.ENTITY_HANDLER_NAME);

    metadataDispatcher.addEntityHandlerMetadata(entity);

    injectable()(target);
  };
}

/**
 * This decorator can be applied to classes containing repository logic.
 */

function Repository<Target extends new (...args: never) => unknown>() {
  return function (target: Target) {
    injectable()(target);
  };
}

/**
 * This decorator can be applied to  containing business logic.
 */

function ServiceLogic<Target extends new (...args: never) => unknown>() {
  return function (target: Target) {
    injectable()(target);
  };
}

/**
 * This decorator can be applied to classes  Unbound .
 */

function UnboundActions<Target extends new (...args: never) => unknown>() {
  return function (target: Target) {
    injectable()(target);
  };
}

export { EntityHandler, Repository, ServiceLogic, UnboundActions };
