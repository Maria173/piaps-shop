import React from 'react';
import PropTypes from 'prop-types';
import Method from './Method';
import { useModal } from '@components/common/modal/useModal';
import MethodForm from './MethodForm';

export function Methods({ getZones, methods, addMethodApi }) {
  const modal = useModal();
  return (
    <div className="my-2">
      <table className="border-collapse divide-y">
        <thead>
          <tr>
            <th className="border-none">Метод</th>
            <th className="border-none">Статус</th>
            <th className="border-none">Стоимость</th>
            <th className="border-none">Состояние</th>
            <th className="border-none">Действие</th>
          </tr>
        </thead>
        {methods.map((method) => {
          return (
            <tr key={method.methodId} className="border-divider py-2">
              <Method method={method} getZones={getZones} />
            </tr>
          );
        })}
      </table>
      <div className="mt-1">
        <a
          href="#"
          className="text-interactive"
          onClick={(e) => {
            e.preventDefault();
            modal.openModal();
          }}
        >
          + Добавить метод
        </a>
      </div>
      {modal.state.showing && (
        <div className={modal.className} onAnimationEnd={modal.onAnimationEnd}>
          <div
            className="modal-wrapper flex self-center justify-center items-center"
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <MethodForm
                saveMethodApi={addMethodApi}
                closeModal={() => modal.closeModal()}
                getZones={getZones}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Methods.propTypes = {
  methods: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      cost: PropTypes.string.isRequired
    })
  ).isRequired,
  getZones: PropTypes.func.isRequired
};