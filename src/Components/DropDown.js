import React from 'react'

function DropDown(props){
    const {vehiclesToDisplay, buyersToDisplay,
        newVehiclesToSelect, addCarFn, filterByMakeFn} = props
    const makeArray = vehiclesToDisplay.make
    return (
        <select
            onChange={this.filterByMake}
            ref={selectedMake => {
              this.selectedMake = selectedMake;
            }}
            className="btn-sp"
            value=""
          >
            <option value="" disabled>
              Filter by make
            </option>
            <option value="Suzuki">Suzuki</option>
            <option value="GMC">GMC</option>
            <option value="Ford">Ford</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Cadillac">Cadillac</option>
            <option value="Dodge">Dodge</option>
            <option value="Chrysler">Chrysler</option>
            <option value="New">{this.state.newVehiclesToSelect[this.state.newVehiclesToSelect.length-1]}</option>
          </select>
    )
}

export default DropDown