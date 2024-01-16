import { request } from "@/utils/request";
import { POKEMON_MODEL, BASE_MODEL } from "@/utils/constant";

const getPokemon = ({ page, limit }) => {
  const params = [];
  if (page) {
    params.push(["page", page]);
  }
  if (limit) {
    params.push(["limit", limit]);
  }
  return request(`${POKEMON_MODEL}`, {
    method: "GET",
    params: new URLSearchParams(params),
  });
};

const getPokemonType = ({ page, limit, keyword }) => {
  const params = [];
  if (page) {
    params.push(["page", page]);
  }
  if (limit) {
    params.push(["limit", limit]);
  }
  if (keyword) {
    params.push(["keyword", keyword]);
  }
  return request(`${BASE_MODEL}/types`, {
    method: "GET",
    params: new URLSearchParams(params),
  });
};

const getPokemonClass = ({ page, limit, keyword }) => {
  const params = [];
  if (page) {
    params.push(["page", page]);
  }
  if (limit) {
    params.push(["limit", limit]);
  }
  if (keyword) {
    params.push(["keyword", keyword]);
  }
  return request(`${BASE_MODEL}/classifications`, {
    method: "GET",
    params: new URLSearchParams(params),
  });
};

const PokemonServices = {
  getPokemon,
  getPokemonType,
  getPokemonClass,
};

export default PokemonServices;
